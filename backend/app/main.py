from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.auth import router as auth_router
from app.api.report import router as report_router
from app.api.upload import router as upload_router
from app.api.user import router as user_router

app = FastAPI(
    title="EcoSync AI API",
    version="1.0.0",
    description="AI Powered Smart Waste Management Platform",
)

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(report_router)
app.include_router(upload_router)
app.include_router(user_router)


@app.get("/")
def root():
    return {
        "message": "EcoSync AI Backend Running 🚀",
        "version": "1.0.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }