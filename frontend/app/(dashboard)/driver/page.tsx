"use client";

import { useEffect, useState } from "react";

interface Report {
  id: number;
  image_url: string;
  description: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  status: string;
  created_at?: string;
}

export default function DriverDashboard() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadReports() {
    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        "http://127.0.0.1:8000/reports/driver",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to load reports");
      }

      const data = await res.json();

      setReports(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function completeJob(id: number) {
    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        `http://127.0.0.1:8000/reports/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify("completed"),
        }
      );

      if (!res.ok) {
        throw new Error("Failed");
      }

      loadReports();
    } catch (err) {
      console.error(err);
      alert("Unable to complete job");
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  const total = reports.length;

  const completed = reports.filter(
    (r) => r.status === "completed"
  ).length;

  const pending = reports.filter(
    (r) => r.status !== "completed"
  ).length;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="mb-8 text-4xl font-bold text-emerald-600">
        🚛 Driver Dashboard
      </h1>

      <div className="mb-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-xl">
          <p>Total Assigned</p>
          <h2 className="mt-3 text-5xl font-bold">
            {total}
          </h2>
        </div>

        <div className="rounded-2xl bg-yellow-500 p-6 text-white shadow-xl">
          <p>Pending</p>
          <h2 className="mt-3 text-5xl font-bold">
            {pending}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-600 p-6 text-white shadow-xl">
          <p>Completed</p>
          <h2 className="mt-3 text-5xl font-bold">
            {completed}
          </h2>
        </div>

      </div>

      {reports.length === 0 && (
        <div className="rounded-2xl bg-white p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold">
            🎉 No Assigned Reports
          </h2>

          <p className="mt-3 text-slate-500">
            Waiting for new assignments...
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {reports.map((report) => (

          <div
            key={report.id}
            className="rounded-2xl bg-white p-5 shadow-xl"
          >

            <img
              src={report.image_url}
              alt="Waste"
              className="h-56 w-full rounded-xl object-cover"
            />

            <h2 className="mt-4 text-xl font-bold">
              {report.description}
            </h2>

            <p className="mt-2 text-slate-600">
              📍 {report.address}
            </p>

            {report.created_at && (
              <p className="mt-2 text-sm text-gray-500">
                {new Date(report.created_at).toLocaleString()}
              </p>
            )}

            <div className="mt-4">

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  report.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : report.status === "in_progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {report.status}
              </span>

            </div>

            {report.latitude && report.longitude && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${report.latitude},${report.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-lg bg-indigo-600 py-3 text-center text-white"
              >
                📍 Navigate
              </a>
            )}

            {report.status !== "completed" && (
              <button
                onClick={() => completeJob(report.id)}
                className="mt-4 w-full rounded-lg bg-green-600 py-3 text-white"
              >
                ✅ Complete Job
              </button>
            )}

          </div>

        ))}

      </div>

    </main>
  );
}