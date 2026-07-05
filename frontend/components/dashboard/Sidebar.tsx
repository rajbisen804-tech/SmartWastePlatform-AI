"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MapPinned,
  History,
  Bot,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Report Waste",
    icon: MapPinned,
    href: "/report",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
  {
    title: "AI Detection",
    icon: Bot,
    href: "/ai",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="glass fixed left-6 top-6 h-[94vh] w-72 rounded-3xl p-6 shadow-2xl">

      <h1 className="mb-10 text-3xl font-bold text-emerald-600">
        EcoSync AI
      </h1>

      <div className="space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <Link
              key={menu.title}
              href={menu.href}
              className="flex items-center gap-4 rounded-2xl p-4 transition hover:bg-emerald-500 hover:text-white"
            >
              <Icon size={22} />
              {menu.title}
            </Link>
          );
        })}

      </div>

    </aside>
  );
}