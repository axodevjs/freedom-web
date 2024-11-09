"use client";

import { MainLayout } from "@/shared/layouts/main-layout";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";
import { Textarea } from "@/shared/shadcn/components/ui/textarea";
import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

const CreatePage = () => {
  const [softSkills, setSoftSkills] = useState<string[]>([]);
  const [newSoftSkill, setNewSoftSkill] = useState("");

  const addSoftSkill = () => {
    if (newSoftSkill.trim() !== "") {
      setSoftSkills([...softSkills, newSoftSkill.trim()]);
      setNewSoftSkill("");
    }
  };

  const removeSoftSkill = (index: number) => {
    setSoftSkills(softSkills.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted", event.target);
  };

  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Создание вакансии
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Название вакансии</Label>
              <Input
                id="title"
                placeholder="Например, Senior Frontend Developer"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание вакансии</Label>
              <Textarea
                id="description"
                placeholder="Опишите обязанности и требования"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Soft Skills</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center"
                  >
                    {skill}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2"
                      onClick={() => removeSoftSkill(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newSoftSkill}
                  onChange={(e) => setNewSoftSkill(e.target.value)}
                  placeholder="Добавить Soft Skill"
                />
                <Button type="button" onClick={addSoftSkill} size="icon">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workFormat">Формат работы</Label>
              <Input
                id="workFormat"
                placeholder="Например, Удаленно, Офис, Гибрид"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employmentType">Тип занятости</Label>
              <Input
                id="employmentType"
                placeholder="Например, Полная, Частичная, Проектная"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salaryFrom">Зарплата от</Label>
                <Input
                  id="salaryFrom"
                  type="number"
                  placeholder="Минимальная зарплата"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryTo">Зарплата до</Label>
                <Input
                  id="salaryTo"
                  type="number"
                  placeholder="Максимальная зарплата"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="testTask">Тестовое задание</Label>
              <Textarea
                id="testTask"
                placeholder="Опишите тестовое задание для кандидатов"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Дополнительно</Label>
              <Input
                id="additional"
                placeholder="Дополнительная информация (через запятую)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contacts">Контакты</Label>
              <Input
                id="contacts"
                placeholder="Контактная информация (через запятую)"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Создать вакансию
            </Button>
          </form>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default CreatePage;
