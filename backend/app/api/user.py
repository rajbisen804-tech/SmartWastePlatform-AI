from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.get("/drivers")
def get_drivers(
    db: Session = Depends(get_db),
):
    drivers = (
        db.query(User)
        .filter(User.role == "driver")
        .all()
    )

    return [
        {
            "id": driver.id,
            "full_name": driver.full_name,
        }
        for driver in drivers
    ]