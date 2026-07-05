from sqlalchemy import String, Integer
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship,
)

from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    full_name: Mapped[str] = mapped_column(
        String(100)
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
    )

    phone: Mapped[str] = mapped_column(
        String(20),
        unique=True,
    )

    password_hash: Mapped[str] = mapped_column(
        String(255)
    )

    role: Mapped[str] = mapped_column(
        String(30),
        default="citizen",
    )

    # Reports created by citizen
    reports = relationship(
        "WasteReport",
        foreign_keys="WasteReport.user_id",
        back_populates="user",
    )

    # Reports assigned to driver
    assigned_reports = relationship(
        "WasteReport",
        foreign_keys="WasteReport.driver_id",
        back_populates="driver",
    )