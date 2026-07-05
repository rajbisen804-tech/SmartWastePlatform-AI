import cloudinary
import cloudinary.uploader

from fastapi import UploadFile

from app.core.config import settings

cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET,
    secure=True,
)

def save_image(file: UploadFile) -> str:
    try:
        result = cloudinary.uploader.upload(
            file.file,
            folder="ecosync_ai",
        )

        print(result)

        return result["secure_url"]

    except Exception as e:
        print("CLOUDINARY ERROR:", e)
        raise