 "use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type LeafletIconDefaultPrototype = L.Icon.Default & {
  _getIconUrl?: unknown;
};

delete (L.Icon.Default.prototype as LeafletIconDefaultPrototype)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Report {
  id: number;
  image_url: string;
  description: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  status: string;
}

export default function ReportMap({
  reports,
}: {
  reports: Report[];
}) {
  const validReports = reports.filter(
    (report) =>
      report.latitude !== null &&
      report.longitude !== null
  );

  return (
    <MapContainer
      center={[23.2599, 77.4126]}
      zoom={12}
      scrollWheelZoom
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {validReports.map((report) => (
        <Marker
          key={report.id}
          position={[
            report.latitude!,
            report.longitude!,
          ]}
        >
          <Popup>
            <div className="w-56">

              <img
                src={report.image_url}
                alt="Waste"
                className="mb-3 h-32 w-full rounded-lg object-cover"
              />

              <h3 className="font-bold text-lg">
                {report.description}
              </h3>

              <p className="mt-2 text-sm">
                📍 {report.address}
              </p>

              <p className="mt-2">
                <strong>Status:</strong>{" "}
                {report.status}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Report ID #{report.id}
              </p>

            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
