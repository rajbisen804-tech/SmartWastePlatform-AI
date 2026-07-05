"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="glass flex items-center justify-between rounded-3xl p-6 shadow-xl">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="mt-1 text-slate-500">
          Smart Waste Monitoring Dashboard
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search..."
            className="w-72 rounded-2xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-emerald-500"
          />

        </div>

        <button className="rounded-2xl bg-white p-3 shadow transition hover:scale-105">
          <Bell size={22}/>
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-2 shadow">

          <UserCircle2
            size={42}
            className="text-emerald-600"
          />

          <div>

            <p className="font-semibold">
              Raj Bisen
            </p>

            <span className="text-sm text-slate-500">
              Administrator
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}