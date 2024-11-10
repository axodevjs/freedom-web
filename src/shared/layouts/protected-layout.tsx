"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/auth/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedLayout;
