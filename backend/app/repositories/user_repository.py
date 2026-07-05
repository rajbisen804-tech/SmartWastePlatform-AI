from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:

    @staticmethod
    def get_by_email(db: Session, email: str):
        return db.scalar(
            select(User).where(User.email == email)
        )

    @staticmethod
    def create(db: Session, user: User):
        db.add(user)
        db.commit()
        db.refresh(user)
        return user