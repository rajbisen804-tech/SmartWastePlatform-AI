"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconEye,
  IconEyeOff,
  IconUser,
  IconMail,
  IconPhone,
  IconLock,
} from "@tabler/icons-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="auth-bg flex min-h-screen items-center justify-center px-6 py-10">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="glass w-full max-w-md rounded-3xl border border-white/30 p-8 shadow-2xl"
      >

        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-600 text-4xl text-white shadow-lg">
            ♻️
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Join EcoSync AI
          </p>

        </div>

        <form className="mt-8 space-y-5">

          <div className="relative">

            <IconUser className="absolute left-4 top-3.5 text-slate-400" />

            <input
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Full Name"
            />

          </div>

          <div className="relative">

            <IconMail className="absolute left-4 top-3.5 text-slate-400" />

            <input
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Email"
              type="email"
            />

          </div>

          <div className="relative">

            <IconPhone className="absolute left-4 top-3.5 text-slate-400" />

            <input
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Phone Number"
            />

          </div>

          <div className="relative">

            <IconLock className="absolute left-4 top-3.5 text-slate-400" />

            <input
              className="w-full rounded-xl border p-3 pl-11 pr-12"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3"
            >
              {showPassword ? (
                <IconEyeOff size={20} />
              ) : (
                <IconEye size={20} />
              )}
            </button>

          </div>

          <button
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">

          Already have an account?

          <Link
            href="/login"
            className="ml-2 font-semibold text-emerald-600"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </main>
  );
}