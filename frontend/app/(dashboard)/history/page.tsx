"use client";

import { useEffect, useState } from "react";

interface Report {
  id: number;
  image_url: string;
  description: string;
  address: string;
  status: string;
  created_at: string;
}

export default function HistoryPage() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    async function loadReports() {
      const token = localStorage.getItem("access_token");

      const res = await fetch("http://127.0.0.1:8000/reports/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error(await res.text());
        return;
      }

      const data = await res.json();
      setReports(data);
    }

    loadReports();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-4xl font-bold">
        My Waste Reports
      </h1>

      {reports.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          No reports found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className="rounded-2xl bg-white p-5 shadow-lg"
            >
              <img
                src={report.image_url}
                alt="Waste"
                className="h-52 w-full rounded-xl object-cover"
              />

              <h2 className="mt-4 text-xl font-semibold">
                {report.description}
              </h2>

              <p className="mt-2 text-slate-600">
                📍 {report.address}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {report.status}
                </span>

                <span className="text-xs text-slate-500">
                  #{report.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}