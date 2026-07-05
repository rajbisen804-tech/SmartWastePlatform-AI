from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.db.database import get_db
from app.schemas.auth import (
    LoginRequest,
    RegisterRequest,
    TokenResponse,
)
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(
    data: RegisterRequest,
    db: Session = Depends(get_db),
):
    try:
        user = AuthService.register(db, data)

        return {
            "message": "User registered successfully",
            "user_id": user.id,
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    data: LoginRequest,
    db: Session = Depends(get_db),
):
    try:
        return AuthService.login(db, data)

    except ValueError as e:
        raise HTTPException(
            status_code=401,
            detail=str(e),
        )

@router.get("/me")
def get_profile(
    current_user: User = Depends(get_current_user),
):
    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email,
        "phone": current_user.phone,
        "role": current_user.role,
    }
