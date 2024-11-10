import { getJobs } from "@/entities/job/api/get-jobs";
import { CompatibilityMeter } from "@/entities/job/ui/compatibility";
import { JobDetails } from "@/entities/job/ui/job-details";

export default async function VacancyPage({
  params,
}: {
  params: { id: string };
}) {
  const jobs = await getJobs(); // Fetch all jobs
  const job = jobs.find((job) => job.id === parseInt(params.id)); // Find the job by ID

  if (!job) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Вакансия не найдена</h1>
        <p className="text-gray-600">Проверьте правильность ссылки.</p>
      </div>
    );
  }

  const compatibility = 80; // Example compatibility score

  return (
    <>
      <CompatibilityMeter compatibility={compatibility} />
      <JobDetails job={job} />
    </>
  );
}
