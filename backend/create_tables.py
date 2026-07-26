from app.database.database import Base, engine

from app.models import (
    User,
    ChatSession,
    Message,
    MedicalReport,
)

Base.metadata.create_all(bind=engine)