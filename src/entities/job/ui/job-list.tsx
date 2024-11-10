import { useQuery } from "@tanstack/react-query";
import { getJobs, getUserJobs } from "../api/get-jobs";
import { JobCard } from "./job-card";

interface JobListProps {
  userId?: string; // Optional parameter for filtering by user
}

export const JobList: React.FC<JobListProps> = ({ userId }) => {
  // Use different query functions based on the userId
  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: userId ? ["userJobs", userId] : ["jobs"],
    queryFn: userId ? () => getUserJobs(userId) : () => getJobs(),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });

  if (isLoading) {
    return <p>Загрузка вакансий...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Не удалось загрузить вакансии.</p>;
  }

  return (
    <>
      {!userId && (
        <h2 className="text-2xl font-semibold">
          Найдено вакансий: {jobs?.length || 0}
        </h2>
      )}

      <div className="space-y-6">
        {jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};
