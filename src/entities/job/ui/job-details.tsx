import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import {
  BriefcaseIcon,
  CurrencyIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { JobSections } from "./job-sections";

export function JobDetails({ job }: { job: any }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-3xl font-bold mb-2">
              {job.title}
            </CardTitle>
            <p className="text-xl text-gray-600">{job.description}</p>
          </div>
          <Button size="lg">Откликнуться</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {job.location && (
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>{job.location}</span>
            </div>
          )}
          {job.employmentType && (
            <div className="flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>{job.employmentType}</span>
            </div>
          )}
          {job.salary && (
            <div className="flex items-center">
              <CurrencyIcon className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                {job.salary.length === 2
                  ? `${job.salary[0]} - ${job.salary[1]} ₸`
                  : `${job.salary[0]} ₸`}
              </span>
            </div>
          )}
          <div className="flex items-center">
            <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span>Опубликовано: {job.created_at || "Не указано"}</span>
          </div>
        </div>
        <JobSections job={job} />
      </CardContent>
    </Card>
  );
}
