"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const ReportMap = dynamic(
  () => import("@/components/ReportMap"),
  {
    ssr: false,
  }
);

interface Report {
  id: number;
  image_url: string;
  description: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  status: string;
  driver_id: number | null;
  ai_category: string | null;
  ai_confidence: number | null;
}

interface Driver {
  id: number;
  full_name: string;
}

export default function AdminPage() {
  
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const loadReports = useCallback(async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/reports/all"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch reports");
      }

      const data = await res.json();

      setReports(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  async function updateStatus(
    id: number,
    status: string
  ) {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/reports/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(status),
        }
      );

      if (!res.ok) {
        throw new Error("Update failed");
      }

      await loadReports();
    } catch (err) {
      console.error(err);
      alert("Status update failed");
    }
  }

  async function loadDrivers() {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/users/drivers"
      );

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();

      setDrivers(data);

    } catch (err) {
      console.error(err);
    }
  }

  async function assignDriver(
  reportId: number,
  driverId: number
) {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/reports/${reportId}/assign-driver`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          driver_id: driverId,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Assignment failed");
    }

    await loadReports();

  } catch (err) {
    console.error(err);

    alert("Driver assignment failed");
  }
}

  useEffect(() => {
    loadReports();
    loadDrivers();
  }, [loadReports]);

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        report.address
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        report.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [reports, search, filter]);

  const total = reports.length;
  const pending = reports.filter(
    (r) => r.status === "pending"
  ).length;

  const progress = reports.filter(
    (r) => r.status === "in_progress"
  ).length;

  const completed = reports.filter(
    (r) => r.status === "completed"
  ).length;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="mb-8 text-4xl font-bold text-emerald-600">
        EcoSync AI Admin Dashboard
      </h1>

      {/* Analytics */}

      <div className="mb-8 grid gap-5 md:grid-cols-4">

        <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-lg">
          <p>Total Reports</p>
          <h2 className="mt-3 text-5xl font-bold">
            {total}
          </h2>
        </div>

        <div className="rounded-2xl bg-yellow-500 p-6 text-white shadow-lg">
          <p>Pending</p>
          <h2 className="mt-3 text-5xl font-bold">
            {pending}
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg">
          <p>In Progress</p>
          <h2 className="mt-3 text-5xl font-bold">
            {progress}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-600 p-6 text-white shadow-lg">
          <p>Completed</p>
          <h2 className="mt-3 text-5xl font-bold">
            {completed}
          </h2>
        </div>

      </div>

      {/* Search */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row">

        <input
          className="flex-1 rounded-xl border bg-white p-3"
          placeholder="Search by description or address..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="rounded-xl border bg-white p-3"
        >
          <option value="all">All</option>
          <option value="pending">
            Pending
          </option>
          <option value="in_progress">
            In Progress
          </option>
          <option value="completed">
            Completed
          </option>
        </select>

      </div>

      {/* Live Map */}

      <div className="mb-10 overflow-hidden rounded-2xl shadow-xl">
        <ReportMap reports={filteredReports} />
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredReports.map((report) => (

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

            <div className="mt-4 rounded-xl bg-emerald-50 p-3">

              <p className="font-bold">
                🤖 AI Analysis
              </p>

              <p>
                Category: {report.ai_category ?? "Unknown"}
              </p>

              <p>
                Confidence: {report.ai_confidence ?? 0}%
              </p>

            </div>

            <div className="mt-4 flex items-center justify-between">

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

              <span>ID #{report.id}</span>

            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">

              <button
                onClick={() =>
                  updateStatus(
                    report.id,
                    "pending"
                  )
                }
                className="rounded-lg bg-yellow-500 py-2 text-white"
              >
                Pending
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    report.id,
                    "in_progress"
                  )
                }
                className="rounded-lg bg-blue-600 py-2 text-white"
              >
                Progress
              </button>

              <button
                onClick={() =>
                  updateStatus(
                    report.id,
                    "completed"
                  )
                }
                className="rounded-lg bg-green-600 py-2 text-white"
              >
                Complete
              </button>

            </div>


            <div className="mt-5">

            <select
              className="w-full rounded-lg border p-2"
              defaultValue=""
              onChange={(e) =>
                assignDriver(
                  report.id,
                  Number(e.target.value)
                )
              }
            >

              <option value="" disabled>
                Assign Driver
              </option>

              {drivers.map((driver) => (

                <option
                  key={driver.id}
                  value={driver.id}
                >
                  {driver.full_name}
                </option>

              ))}

            </select>

          </div>

          </div>

        ))}

      </div>

    </main>
  );
}