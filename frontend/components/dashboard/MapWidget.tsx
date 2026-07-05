"use client";

import dynamic from "next/dynamic";

const ReportMap = dynamic(
  () => import("@/components/ReportMap"),
  {
    ssr: false,
  }
);

const reports = [
  {
    id: 1,
    latitude: 23.2599,
    longitude: 77.4126,
    description: "Plastic Waste",
    address: "MP Nagar",
    status: "pending",
    image_url: "",
  },
  {
    id: 2,
    latitude: 23.245,
    longitude: 77.401,
    description: "Garbage",
    address: "New Market",
    status: "completed",
    image_url: "",
  },
];

export default function MapWidget() {
  return (
    <div className="glass rounded-3xl p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold">
        Live Waste Map
      </h2>

      <div className="overflow-hidden rounded-2xl">

        <ReportMap reports={reports} />

      </div>

    </div>
  );
}