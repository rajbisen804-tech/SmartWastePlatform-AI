from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "EcoSync AI"

    APP_ENV: str = "development"

    SECRET_KEY: str

    DATABASE_URL: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    CLOUDINARY_CLOUD_NAME: str
    CLOUDINARY_API_KEY: str
    CLOUDINARY_API_SECRET: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()