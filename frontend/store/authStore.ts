import { create } from "zustand";

interface AuthState {
  token: string | null;
  initialized: boolean;

  initialize: () => void;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  initialized: false,

  initialize: () => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("access_token");

    set({
      token,
      initialized: true,
    });
  },

  login: (token: string) => {
    localStorage.setItem("access_token", token);

    set({
      token,
      initialized: true,
    });
  },

  logout: () => {
    localStorage.removeItem("access_token");

    set({
      token: null,
      initialized: true,
    });
  },
}));