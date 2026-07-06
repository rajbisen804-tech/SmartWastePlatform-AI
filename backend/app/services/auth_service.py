from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)

from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
)


class AuthService:

    @staticmethod
    def register(
        db: Session,
        data: RegisterRequest,
    ):
        existing = UserRepository.get_by_email(
            db,
            data.email,
        )

        if existing:
            raise ValueError("Email already exists")

        user = User(
            full_name=data.full_name,
            email=data.email,
            phone=data.phone,
            password_hash=hash_password(data.password),
            role="citizen",
        )

        try:
            return UserRepository.create(
                db,
                user,
            )
        except IntegrityError:
            db.rollback()
            raise ValueError("Email or phone already exists")

    @staticmethod
    def login(
        db: Session,
        data: LoginRequest,
    ):
        user = UserRepository.get_by_email(
            db,
            data.email,
        )

        if user is None:
            raise ValueError("Invalid email or password")

        if not verify_password(
            data.password,
            user.password_hash,
        ):
            raise ValueError("Invalid email or password")

        access_token = create_access_token(
            {
                "sub": str(user.id),
                "user_id": user.id,
                "email": user.email,
                "role": user.role,
            }
        )

        return {
            "access_token": access_token,
            "token_type": "bearer",
        }
