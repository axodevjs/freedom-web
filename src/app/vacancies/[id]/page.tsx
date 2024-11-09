"use client";

import { jobListings } from "@/entities/job/model";
import { MainLayout } from "@/shared/layouts/main-layout";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Progress } from "@/shared/shadcn/components/ui/progress";
import { Separator } from "@radix-ui/react-select";
import {
  BriefcaseIcon,
  BuildingIcon,
  ClockIcon,
  CurrencyIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

function CompatibilityMeter({ compatibility }: { compatibility: number }) {
  return (
    <Card className="mb-8">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-muted-foreground stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-primary stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${compatibility * 2.51}, 251.2`}
                transform="rotate(-90 50 50)"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{compatibility}%</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ваша совместимость</h3>
            <p className="text-sm text-muted-foreground">
              {compatibility < 40 && "Есть потенциал для роста"}
              {compatibility >= 40 && compatibility < 70 && "Хороший кандидат"}
              {compatibility >= 70 && "Отличное совпадение"}
            </p>
          </div>
        </div>
        <Progress value={compatibility} className="w-1/3" />
      </CardContent>
    </Card>
  );
}

const VacancyPage = () => {
  const jobDetails = jobListings[0]; // Демо-данные, замените на реальную загрузку
  const [compatibility, setCompatibility] = useState(85);

  return (
    <MainLayout>
      <main className="container mx-auto px-4">
        <CompatibilityMeter compatibility={compatibility} />

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl font-bold mb-2">
                  {jobDetails.title}
                </CardTitle>
                <p className="text-xl text-gray-600">{jobDetails.company}</p>
              </div>
              <Button size="lg">Откликнуться</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{jobDetails.location}</span>
              </div>
              <div className="flex items-center">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{jobDetails.type || "Не указано"}</span>
              </div>
              <div className="flex items-center">
                <CurrencyIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{jobDetails.salary || "Не указано"}</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>Опыт: {jobDetails.experience || "Не указан"}</span>
              </div>
              <div className="flex items-center">
                <BuildingIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>{jobDetails.company}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  Опубликовано: {jobDetails.postedDate || "Не указано"}
                </span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-6">
              {jobDetails.description && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Описание вакансии
                  </h2>
                  <p className="text-gray-700">{jobDetails.description}</p>
                </section>
              )}

              {jobDetails.responsibilities && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Обязанности</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {jobDetails.responsibilities.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {jobDetails.requirements && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Требования</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {jobDetails.requirements.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {jobDetails.benefits && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Мы предлагаем</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {jobDetails.benefits.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <Separator className="my-6" />

            <div className="flex justify-center">
              <Button size="lg">Откликнуться на вакансию</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </MainLayout>
  );
};

export default VacancyPage;
