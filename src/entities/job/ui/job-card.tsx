import { Button } from "@/shared/shadcn/components/ui/button";
import { Card, CardContent } from "@/shared/shadcn/components/ui/card";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { Job } from "../model";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => (
  <Link href={`/vacancies/${job.id}`}>
    <Card className="mt-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
          </div>
          <Button variant="outline" size="sm">
            Откликнуться
          </Button>
        </div>
        <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
          {job.location && (
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>{job.location}</span>
            </div>
          )}
          <div className="flex items-center">
            <BriefcaseIcon className="w-4 h-4 mr-1" />
            <span>
              {job.salary.length === 2
                ? `${job.salary[0]} - ${job.salary[1]} ₸`
                : `${job.salary[0]} ₸`}
            </span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>
            <strong>Формат работы:</strong> {job.formatOfWork.join(", ")}
          </p>
        </div>
      </CardContent>
    </Card>
  </Link>
);
