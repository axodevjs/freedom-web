"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/"); // Redirect to the homepage if the user is logged in
    }
  }, [router]);

  return <>{children}</>;
}
