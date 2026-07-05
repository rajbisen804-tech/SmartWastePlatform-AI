"use client";

import {
  Clock3,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const reports = [
  {
    id: 1,
    area: "MP Nagar",
    type: "Plastic Waste",
    status: "Completed",
  },
  {
    id: 2,
    area: "BHEL",
    type: "Organic Waste",
    status: "Pending",
  },
  {
    id: 3,
    area: "New Market",
    type: "Mixed Waste",
    status: "In Progress",
  },
];

export default function RecentReports() {
  return (
    <div className="glass rounded-3xl p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Reports
      </h2>

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report.id}
            className="flex items-center justify-between rounded-2xl bg-white p-4 shadow transition hover:scale-[1.02]"
          >

            <div>

              <h3 className="font-semibold">
                {report.area}
              </h3>

              <p className="text-sm text-slate-500">
                {report.type}
              </p>

            </div>

            <div>

              {report.status === "Completed" && (

                <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">

                  <CheckCircle2 size={18} />

                  Completed

                </div>

              )}

              {report.status === "Pending" && (

                <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">

                  <Clock3 size={18} />

                  Pending

                </div>

              )}

              {report.status === "In Progress" && (

                <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">

                  <LoaderCircle size={18} />

                  Progress

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}