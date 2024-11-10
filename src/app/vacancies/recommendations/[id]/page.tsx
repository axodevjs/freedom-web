"use client";

import { useRecommendations } from "@/entities/job/api/get-recommendations";
import { Badge } from "@/shared/shadcn/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Briefcase, Building, Clock, DollarSign, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function RecommendationsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    params.then(({ id }) => setId(id));
  }, [params]);

  const { data: candidates, isLoading, isError } = useRecommendations(id);

  if (isLoading) {
    return <div>Loading recommendations...</div>;
  }

  if (isError) {
    return <div>Error loading recommendations. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Рекомендованные кандидаты (Вычислено с ИИ)
      </h1>
      <div className="grid gap-6">
        {candidates?.map((candidate) => (
          <Card key={candidate.id} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">
                    {candidate.position}
                  </CardTitle>
                  <CardDescription className="mt-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {candidate.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-lg">
                  Score: {candidate.evaluation}/50
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex flex-wrap gap-2">
                {candidate.hard_skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{candidate.experience} years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {candidate.salary[0]?.toLocaleString()} -{" "}
                    {candidate.salary[1]?.toLocaleString()} KZT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="capitalize">{candidate.employmentType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="capitalize">{candidate.formatOfWork}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Work Experience</h3>
                <ul className="list-disc list-inside space-y-1">
                  {candidate.work_experience.map((exp) => (
                    <li key={exp}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.soft_skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {candidate.contacts.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Contacts</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {candidate.contacts.map((contact, index) => (
                      <li key={index} className="text-gray-700">
                        {contact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
