"use client";

import { Header } from "@/widgets/header/ui/header";
import { QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { queryClient } from "../api/queryClient";
import { useAuthStore } from "../model/use-auth-store";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isAuth, isChecking, checkAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isChecking && !isAuth) {
      router.push("/auth/login");
    }
  }, [isChecking, isAuth, router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Проверка аутентификации...</p>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    </QueryClientProvider>
  );
};
