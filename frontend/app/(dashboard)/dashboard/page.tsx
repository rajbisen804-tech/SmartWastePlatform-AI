"use client";

import AIInsights from "@/components/dashboard/AIInsights";
import ChartCard from "@/components/dashboard/ChartCard";
import Header from "@/components/dashboard/Header";
import MapWidget from "@/components/dashboard/MapWidget";
import NotificationCard from "@/components/dashboard/NotificationCard";
import RecentReports from "@/components/dashboard/RecentReports";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";

import {
  ClipboardList,
  Clock3,
  LoaderCircle,
  CircleCheckBig,
} from "lucide-react";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1">
        <Header />

        <div className="space-y-8 p-8">

          {/* Hero */}

          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-10 text-white shadow-2xl">

            <h1 className="text-5xl font-bold">

              Welcome Back 👋

            </h1>

            <p className="mt-4 max-w-2xl text-lg text-white/90">

              AI Powered Smart Waste Management Dashboard

            </p>

          </div>

          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatsCard
              title="Total Reports"
              value={156}
              color="bg-gradient-to-r from-emerald-500 to-emerald-700"
              icon={<ClipboardList size={32} />}
            />

            <StatsCard
              title="Pending"
              value={38}
              color="bg-gradient-to-r from-yellow-400 to-orange-500"
              icon={<Clock3 size={32} />}
            />

            <StatsCard
              title="In Progress"
              value={52}
              color="bg-gradient-to-r from-sky-500 to-blue-700"
              icon={<LoaderCircle size={32} />}
            />
            <StatsCard
              title="Completed"
              value={66}
              color="bg-gradient-to-r from-violet-500 to-purple-700"
              icon={<CircleCheckBig size={32} />}
            />

          </div>

          {/* Chart + AI */}

          <div className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <ChartCard />

            </div>

            <AIInsights />

          </div>

          {/* Map + Reports */}

          <div className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <MapWidget />

            </div>

            <div className="space-y-8">

              <RecentReports />

              <NotificationCard />

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}