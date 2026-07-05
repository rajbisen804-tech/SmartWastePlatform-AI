from app.ai.model import model


def detect_waste(image_path: str):
    results = model(image_path)

    detections = []

    for result in results:
        for box in result.boxes:

            class_id = int(box.cls[0])

            confidence = float(box.conf[0])

            detections.append(
                {
                    "class": model.names[class_id],
                    "confidence": round(confidence, 2),
                }
            )

    return detections