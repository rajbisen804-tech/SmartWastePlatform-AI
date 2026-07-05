from pydantic import BaseModel


class ReportCreate(BaseModel):
    image_url: str
    description: str
    address: str
    latitude: float | None = None
    longitude: float | None = None


class ReportResponse(BaseModel):
    id: int
    status: str
    latitude: float | None = None
    longitude: float | None = None

    ai_category: str | None = None
    ai_confidence: float | None = None


    class Config:
        from_attributes = True



class AssignDriverRequest(BaseModel):
    driver_id: int

    