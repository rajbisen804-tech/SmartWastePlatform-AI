from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut, GeocoderServiceError


class LocationService:

    geolocator = Nominatim(user_agent="ecosync_ai")

    @staticmethod
    def get_coordinates(address: str):
        try:
            location = LocationService.geolocator.geocode(
                address,
                timeout=10,
            )

            if location:
                return (
                    location.latitude,
                    location.longitude,
                )

        except (GeocoderTimedOut, GeocoderServiceError):
            pass

        return None, None