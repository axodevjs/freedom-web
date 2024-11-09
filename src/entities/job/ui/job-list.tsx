import { Job } from "../model";
import { JobCard } from "./job-card";

interface JobListProps {
  jobs: Job[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <div className="space-y-6">
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
);
