from app.services.pdf_service import extract_text_from_pdf

text = extract_text_from_pdf("uploads/8bba95ae-2214-4830-8b94-714eecdbff16_Vani-Mandarin JUne 2026 RC.pdf")

print(text)