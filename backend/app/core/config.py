from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "EcoSync AI"

    APP_ENV: str = "development"

    SECRET_KEY: str

    DATABASE_URL: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    BACKEND_CORS_ORIGINS: str = (
        "http://localhost:3000,"
        "http://localhost:3001,"
        "https://smart-waste-platform-ai-ecru.vercel.app"
    )
    
    CLOUDINARY_CLOUD_NAME: str
    CLOUDINARY_API_KEY: str
    CLOUDINARY_API_SECRET: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()
