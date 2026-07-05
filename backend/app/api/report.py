from fastapi import APIRouter, Depends, Body
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.models.waste_report import WasteReport

from app.schemas.report import (
    ReportCreate,
    ReportResponse,
    AssignDriverRequest,
)

from app.services.report_service import ReportService

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.post(
    "/",
    response_model=ReportResponse,
)
def create_report(
    data: ReportCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return ReportService.create_report(
        db=db,
        user_id=current_user.id,
        data=data,
    )


@router.get("/my")
def my_reports(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return ReportService.get_user_reports(
        db=db,
        user_id=current_user.id,
    )


@router.get("/")
def get_all_reports(
    db: Session = Depends(get_db),
):
    return (
        db.query(WasteReport)
        .order_by(WasteReport.created_at.desc())
        .all()
    )


@router.patch("/{report_id}")
def update_report_status(
    report_id: int,
    status: str = Body(...),
    db: Session = Depends(get_db),
):
    return ReportService.update_status(
        db=db,
        report_id=report_id,
        status=status,
    )

@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db),
):
    return ReportService.dashboard_stats(db)

@router.get("/all")
def get_all_reports(
    db: Session = Depends(get_db),
):
    return ReportService.get_all_reports(db)

@router.patch("/{report_id}/assign-driver")
def assign_driver(
    report_id: int,
    data: AssignDriverRequest,
    db: Session = Depends(get_db),
):
    try:
        return ReportService.assign_driver(
            db=db,
            report_id=report_id,
            driver_id=data.driver_id,
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        return {"error": str(e)}
    

@router.get("/driver")
def driver_reports(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return ReportService.get_driver_reports(
        db=db,
        driver_id=current_user.id,
    )