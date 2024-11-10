"use client";

import { JobList } from "@/entities/job/ui/job-list";
import { MainLayout } from "@/shared/layouts/main-layout";
import { useAuthStore } from "@/shared/model/use-auth-store";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Filters } from "@/widgets/filters/ui/filters";
import Link from "next/link";

export default function HomePage() {
  const { role } = useAuthStore();

  if (typeof window === "undefined") return;
  return (
    <MainLayout>
      {role === "User" ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Filters />
          <section className="md:col-span-3">
            <JobList />
          </section>
        </div>
      ) : (
        <>
          <div className="flex w-full flex-row justify-between items-center">
            <h2 className="text-2xl font-semibold">Мои вакансии</h2>
            <Link href={"/vacancies/create"}>
              <Button>Создать вакансию</Button>
            </Link>
          </div>

          <JobList userId={localStorage.getItem("id") || ""} />
        </>
      )}
    </MainLayout>
  );
}
