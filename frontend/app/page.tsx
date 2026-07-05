"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatsCard from "@/components/dashboard/StatsCard";
import ChartCard from "@/components/dashboard/ChartCard";
import AIInsights from "@/components/dashboard/AIInsights";
import RecentReports from "@/components/dashboard/RecentReports";
import MapWidget from "@/components/dashboard/MapWidget";
import ProgressCard from "@/components/dashboard/ProgressCard";
import api from "@/lib/api";
import NotificationCard from "@/components/dashboard/NotificationCard";
import WastePieChart from "@/components/dashboard/WastePieChart";
import WeatherCard from "@/components/dashboard/WeatherCard";
import CarbonCard from "@/components/dashboard/CarbonCard";
import TodayCollection from "@/components/dashboard/TodayCollection";

import {
  ClipboardList,
  Clock3,
  LoaderCircle,
  CircleCheckBig,
} from "lucide-react";


interface Stats {
  total: number;
  pending: number;
  in_progress: number;
  completed: number;
}

export default function DashboardPage() {
  const router = useRouter();

  const { token, logout, initialize, initialized } = useAuthStore();

  const [stats, setStats] = useState<Stats>({
    total: 0,
    pending: 0,
    in_progress: 0,
    completed: 0,
  });


  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (initialized && !token) {
      router.replace("/login");
    }
  }, [initialized, token, router]);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await api.get("/reports/stats");
      setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, []);

  if (!initialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!token) return null;

  return (
    <main className="min-h-screen bg-slate-100">

  <Sidebar />

  <div className="ml-80 p-8">

    <Navbar />
    <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-10 text-white shadow-2xl">

      <div className="flex flex-col justify-between gap-8 lg:flex-row">

        <div>

          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/90">

            EcoSync AI helps monitor waste collection,
            optimize smart city cleaning,
            and improve environmental sustainability
            using Artificial Intelligence.

          </p>

          <button
            onClick={() => router.push("/report")}
            className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg transition hover:scale-105"
          >
            Create New Report
          </button>

        </div>

        <div className="flex items-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
            className="h-64 drop-shadow-2xl"
          />

        </div>

      </div>

    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Reports"
        value={stats.total}
        color="bg-gradient-to-r from-emerald-500 to-emerald-700"
        icon={<ClipboardList size={34} />}
      />

      <StatsCard
        title="Pending"
        value={stats.pending}
        color="bg-gradient-to-r from-yellow-400 to-orange-500"
        icon={<Clock3 size={34} />}
      />

      <StatsCard
        title="In Progress"
        value={stats.in_progress}
        color="bg-gradient-to-r from-sky-500 to-blue-700"
        icon={<LoaderCircle size={34} />}
      />

      <StatsCard
        title="Completed"
        value={stats.completed}
        color="bg-gradient-to-r from-violet-500 to-purple-700"
        icon={<CircleCheckBig size={34} />}
      />

    </div>

    <div className="mt-8 grid gap-8 xl:grid-cols-3">

      <div className="space-y-8 xl:col-span-2">

        <ChartCard />

        <WastePieChart/>

        <MapWidget />

      </div>

      <div className="space-y-8">

        <ProgressCard />

        <AIInsights />

       <RecentReports/>

       <NotificationCard/>

       <WeatherCard/>

       <CarbonCard />

       <TodayCollection />

      </div>

    </div>

  </div>

</main>
  );
}

