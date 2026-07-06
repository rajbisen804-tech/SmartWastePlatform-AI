"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  IconEye,
  IconEyeOff,
  IconUser,
  IconMail,
  IconPhone,
  IconLock,
} from "@tabler/icons-react";
import { register } from "@/services/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function getErrorMessage(err: unknown): string {
    if (
      typeof err === "object" &&
      err !== null &&
      "response" in err
    ) {
      const response = (err as { response?: { data?: { detail?: unknown } } }).response;
      const detail = response?.data?.detail;

      if (typeof detail === "string") {
        return detail;
      }

      if (Array.isArray(detail)) {
        return detail
          .map((item) => item?.msg)
          .filter(Boolean)
          .join(", ");
      }
    }

    return "Registration failed";
  }

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await register({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password,
      });

      toast.success("Account created. Please login.");
      router.push("/login");
    } catch (err: unknown) {
      const message = getErrorMessage(err);

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

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

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-5"
        >

          <div className="relative">

            <IconUser className="absolute left-4 top-3.5 text-slate-400" />

            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Full Name"
              required
              minLength={3}
              maxLength={100}
            />

          </div>

          <div className="relative">

            <IconMail className="absolute left-4 top-3.5 text-slate-400" />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Email"
              type="email"
              required
            />

          </div>

          <div className="relative">

            <IconPhone className="absolute left-4 top-3.5 text-slate-400" />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border p-3 pl-11"
              placeholder="Phone Number"
              type="tel"
              required
              minLength={10}
              maxLength={15}
            />

          </div>

          <div className="relative">

            <IconLock className="absolute left-4 top-3.5 text-slate-400" />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border p-3 pl-11 pr-12"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
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

          {error && (
            <div className="rounded-xl bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
              {error}
            </div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
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
