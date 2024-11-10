import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  isChecking: boolean; // Indicates whether the auth check is in progress
  checkAuth: () => void;
  role: null | string;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  isChecking: true, // Initially checking
  role: null,
  checkAuth: () => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("accessToken");
    const roleL = localStorage.getItem("role");
    set({ role: roleL });
    set({ isAuth: !!accessToken, isChecking: false }); // Update auth state and stop checking
  },
  setIsAuth(isAuth) {
    set({ isAuth });
  },
}));
