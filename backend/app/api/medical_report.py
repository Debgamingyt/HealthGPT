import os
import shutil
from uuid import uuid4

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies.auth import get_current_user
from app.models.medical_report import MedicalReport
from app.models.user import User
from app.schemas.medical_report import MedicalReportResponse
from app.services.pdf_service import extract_text_from_pdf
from app.services.ai_service import get_ai_response

router = APIRouter(
    prefix="/medical-reports",
    tags=["Medical Reports"],
)

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post(
    "/upload",
    response_model=MedicalReportResponse
)
async def upload_medical_report(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    unique_filename = f"{uuid4()}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text_from_pdf(file_path)

    prompt = f"""
You are an AI medical assistant.

Analyze the following medical report.

Provide:

1. A simple summary.
2. Explain abnormal values.
3. Mention possible concerns.
4. Recommend discussing results with a qualified healthcare professional.
5. Keep the explanation easy to understand.

Medical Report:

{extracted_text}
"""

    ai_summary = get_ai_response(prompt)

    report = MedicalReport(
        user_id=current_user.id,
        filename=file.filename,
        file_path=file_path,
        extracted_text=extracted_text,
        ai_summary=ai_summary,
    )

    db.add(report)
    db.commit()
    db.refresh(report)

    return report