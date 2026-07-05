from fastapi import APIRouter, File, UploadFile

from app.services.upload_service import UploadService

router = APIRouter(
    prefix="/upload",
    tags=["Upload"],
)


@router.post("/")
async def upload_image(
    file: UploadFile = File(...),
):
    image_url = await UploadService.upload_image(file)

    return {
        "message": "Image uploaded successfully",
        "image_url": image_url,
    }