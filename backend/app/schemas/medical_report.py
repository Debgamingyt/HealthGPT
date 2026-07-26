from pydantic import BaseModel
from datetime import datetime


class MedicalReportResponse(BaseModel):
    id: int
    filename: str
    extracted_text: str | None = None
    ai_summary: str | None = None
    created_at: datetime

    class Config:
        from_attributes = True