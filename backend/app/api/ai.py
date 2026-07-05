from fastapi import APIRouter

from app.ai.classifier import classify_waste

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.get("/detect")
def detect():

    result = classify_waste(
        "uploads/garbage.jpg"
    )

    return result