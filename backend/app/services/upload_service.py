import cloudinary
import cloudinary.uploader

from app.core.config import settings

cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET,
    secure=True,
)


class UploadService:

    @staticmethod
    async def upload_image(file):
        try:
            print("Uploading:", file.filename)

            result = cloudinary.uploader.upload(
                file.file,
                folder="ecosync-ai",
            )

            print("SUCCESS:", result)

            return result["secure_url"]

        except Exception as e:
            print("UPLOAD ERROR:", repr(e))
            raise