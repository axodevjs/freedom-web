import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent } from "@/shared/shadcn/components/ui/card";
import { BriefcaseIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Job } from "../model";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => (
  <Link href={"/vacancies/123"}>
    <Card className="mt-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
          <Button variant="outline">Откликнуться</Button>
        </div>
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <BriefcaseIcon className="w-4 h-4 mr-1" />
            <span>{job.salary}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
);
