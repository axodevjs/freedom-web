"use client";

import { MainLayout } from "@/shared/layouts/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
