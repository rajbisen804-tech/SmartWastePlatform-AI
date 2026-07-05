"use client";

import { motion } from "framer-motion";
import {
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const { handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await handleLogin(
        email,
        password
      );
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-cyan-50 px-6 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <motion.div

          initial={{
          opacity:0,
          y:50,
          }}

          animate={{
          opacity:1,
          y:0,
          }}

          transition={{
          duration:.6,
          }}

          className="glass w-full max-w-md rounded-3xl p-8 shadow-2xl"
          
      ></motion.div>
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-3xl text-white">
            ♻️
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue to EcoSync AI
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="relative">

            <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-emerald-500"
            />

            <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="absolute right-4 top-3"
            >

            {showPassword
            ?
            <IconEyeOff size={20}/>
            :
            <IconEye size={20}/>
            }

            </button>

            </div>
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
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a
            href="/forgot-password"
            className="text-emerald-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mt-4 text-center text-sm text-slate-500">
          Don't have an account?

          <a
            href="/register"
            className="ml-2 font-semibold text-emerald-600 hover:underline"
          >
            Register
          </a>
        </div>

      </div>
    </main>
  );
}
