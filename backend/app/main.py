from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.chat import router as chat_router
from app.api.medical_report import router as medical_report_router

app = FastAPI(
    title="HealthGPT API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://your-frontend-domain.vercel.app"
]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(medical_report_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to HealthGPT API 🚀"
    }