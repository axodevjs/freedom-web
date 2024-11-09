"use client";

import { jobListings } from "@/entities/job/model";
import { JobList } from "@/entities/job/ui/job-list";
import { MainLayout } from "@/shared/layouts/main-layout";
import { Filters } from "@/widgets/filters/ui/filters";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Filters />
        <section className="md:col-span-3">
          <h2 className="text-2xl font-semibold">
            Найдено вакансий: {jobListings.length}
          </h2>
          <JobList jobs={jobListings} />
        </section>
      </div>
    </MainLayout>
  );
}
