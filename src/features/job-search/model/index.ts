import { Job } from "@/entities/job/model";

export const filterJobs = (
  jobs: Job[],
  searchTerm: string,
  locationFilter: string
): Job[] => {
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === "" || job.location === locationFilter)
  );
};
