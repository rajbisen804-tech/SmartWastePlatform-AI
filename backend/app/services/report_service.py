from sqlalchemy.orm import Session

from app.models.waste_report import WasteReport
from app.repositories.report_repository import ReportRepository
from app.schemas.report import ReportCreate
from app.services.location_service import LocationService
from app.ai.classifier import classify_waste


class ReportService:

    @staticmethod
    def create_report(
        db: Session,
        user_id: int,
        data: ReportCreate,
    ):
        latitude, longitude = LocationService.get_coordinates(
            data.address
        )

        # Image path se AI detect karo
        image_path = data.image_url.replace(
            "http://127.0.0.1:8000/",
            ""
        )

        ai_result = classify_waste(image_path)

        report = WasteReport(
            user_id=user_id,
            image_url=data.image_url,
            description=data.description,
            address=data.address,
            latitude=latitude,
            longitude=longitude,
            ai_category=ai_result["category"],
            ai_confidence=ai_result["confidence"],
        )

        return ReportRepository.create(
            db,
            report,
        )
    
    @staticmethod
    def get_user_reports(
        db: Session,
        user_id: int,
    ):
        return ReportRepository.get_by_user(
            db,
            user_id,
        )

    @staticmethod
    def get_all_reports(
        db: Session,
    ):
        return ReportRepository.get_all(
            db,
        )

    @staticmethod
    def update_status(
        db: Session,
        report_id: int,
        status: str,
    ):
        return ReportRepository.update_status(
            db,
            report_id,
            status,
        )

    @staticmethod
    def assign_driver(
        db: Session,
        report_id: int,
        driver_id: int,
    ):
        return ReportRepository.assign_driver(
            db=db,
            report_id=report_id,
            driver_id=driver_id,
        )

    @staticmethod
    def dashboard_stats(
        db: Session,
    ):
        reports = ReportRepository.get_all(db)

        return {
            "total": len(reports),
            "pending": len(
                [r for r in reports if r.status == "pending"]
            ),
            "in_progress": len(
                [r for r in reports if r.status == "in_progress"]
            ),
            "completed": len(
                [r for r in reports if r.status == "completed"]
            ),
        }
    
    @staticmethod
    def get_driver_reports(
        db: Session,
        driver_id: int,
    ):
        return ReportRepository.get_driver_reports(
            db,
            driver_id,
        )