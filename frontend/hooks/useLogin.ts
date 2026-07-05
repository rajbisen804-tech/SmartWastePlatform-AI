"use client";

import { useRouter } from "next/navigation";

import { login } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";

export function useLogin() {
  const router = useRouter();

  const auth = useAuthStore();

  async function handleLogin(
    email: string,
    password: string
  ) {
    const response = await login({
      email,
      password,
    });

    auth.login(response.access_token);

    router.push("/dashboard");
  }

  return {
    handleLogin,
  };
}