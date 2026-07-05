from app.ai.detector import detect_waste
from app.ai.waste_mapper import COCO_TO_WASTE


def classify_waste(image_path: str):

    detections = detect_waste(image_path)

    if not detections:
        return {
            "category": "Unknown",
            "confidence": 0
        }

    best = max(
        detections,
        key=lambda x: x["confidence"]
    )

    waste = COCO_TO_WASTE.get(
        best["class"],
        "Mixed Waste"
    )

    return {
        "category": waste,
        "confidence": best["confidence"],
        "object": best["class"],
    }