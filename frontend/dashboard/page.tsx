"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";


export default function DashboardPage() {
  const router = useRouter();

  const {
    token,
    logout,
    initialize,
    initialized,
  } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (initialized && !token) {
      router.replace("/login");
    }
  }, [initialized, token, router]);

  if (!initialized) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="flex items-center justify-between border-b bg-white px-8 py-5 shadow dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-bold text-emerald-600">
          EcoSync AI Dashboard
        </h1>

        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <section className="mx-auto max-w-7xl p-8">
        <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
          <h2 className="text-3xl font-bold">
            🎉 Welcome to EcoSync AI
          </h2>

          <p className="mt-4 text-slate-500">
            Authentication is working successfully.
          </p>
        </div>
      </section>
    </main>
  );
}