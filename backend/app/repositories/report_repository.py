from sqlalchemy.orm import Session

from app.models.waste_report import WasteReport


class ReportRepository:

    @staticmethod
    def create(db: Session, report: WasteReport):
        db.add(report)
        db.commit()
        db.refresh(report)
        return report

    @staticmethod
    def get_by_user(db: Session, user_id: int):
        return (
            db.query(WasteReport)
            .filter(WasteReport.user_id == user_id)
            .order_by(WasteReport.created_at.desc())
            .all()
        )

    @staticmethod
    def get_all(db: Session):
        return (
            db.query(WasteReport)
            .order_by(WasteReport.created_at.desc())
            .all()
        )

    @staticmethod
    def update_status(
        db: Session,
        report_id: int,
        status: str,
    ):
        report = (
            db.query(WasteReport)
            .filter(WasteReport.id == report_id)
            .first()
        )

        if not report:
            return None

        report.status = status

        db.commit()
        db.refresh(report)

        return report

    @staticmethod
    def assign_driver(
        db: Session,
        report_id: int,
        driver_id: int,
    ):
        report = (
            db.query(WasteReport)
            .filter(WasteReport.id == report_id)
            .first()
        )

        if not report:
            return None

        report.driver_id = driver_id

        db.commit()
        db.refresh(report)

        return report
    
    @staticmethod
    def get_driver_reports(
        db: Session,
        driver_id: int,
    ):
        return (
            db.query(WasteReport)
            .filter(WasteReport.driver_id == driver_id)
            .order_by(WasteReport.created_at.desc())
            .all()
        )