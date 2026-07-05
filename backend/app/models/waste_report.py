from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
    Float,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class WasteReport(Base):
    __tablename__ = "waste_reports"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    driver_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=True,
    )

    image_url = Column(
        String,
        nullable=False,
    )

    description = Column(
        String,
        nullable=False,
    )

    address = Column(
        String,
        nullable=False,
    )

    latitude = Column(
        Float,
        nullable=True,
    )

    longitude = Column(
        Float,
        nullable=True,
    )

    status = Column(
        String,
        default="pending",
    )

    ai_category = Column(
    String,
    nullable=True,
    )

    ai_confidence = Column(
        Float,
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    # Citizen who created report
    user = relationship(
        "User",
        foreign_keys=[user_id],
        back_populates="reports",
    )

    # Driver assigned
    driver = relationship(
        "User",
        foreign_keys=[driver_id],
        back_populates="assigned_reports",
    )