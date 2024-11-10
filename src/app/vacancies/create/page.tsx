"use client";

import { apiClient } from "@/shared/api/apiClient";
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
import { useQueryClient } from "@tanstack/react-query";
import { PlusCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePage = () => {
  const router = useRouter();

  // State for all fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hardSkills, setHardSkills] = useState<string[]>([]);
  const [newHardSkill, setNewHardSkill] = useState("");
  const [softSkills, setSoftSkills] = useState<string[]>([]);
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [formatOfWork, setFormatOfWork] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [salaryFrom, setSalaryFrom] = useState<number | "">("");
  const [salaryTo, setSalaryTo] = useState<number | "">("");
  const [task, setTask] = useState("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState("");
  const [location, setLocation] = useState("");
  const [additional, setAdditional] = useState<string[]>([]);
  const [newAdditional, setNewAdditional] = useState("");
  const [contacts, setContacts] = useState<string[]>([]);
  const [newContact, setNewContact] = useState("");
  const queryClient = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      userId: 1, // Replace with dynamic userId if needed
      title,
      description,
      hard_skills: hardSkills,
      soft_skills: softSkills,
      formatOfWork: [formatOfWork],
      employmentType,
      salary: salaryFrom && salaryTo ? [salaryFrom, salaryTo] : [],
      task,
      requirements,
      location,
      additional,
      contacts,
    };

    try {
      const result = await apiClient.post("/vacancies/add", data);

      router.push("/vacancies/recommendations/" + result.data.id);
      queryClient.invalidateQueries({
        queryKey: ["userJobs"], // Specify the query key
      });
    } catch (error) {
      console.error("Failed to create vacancy:", error);
    }
  };

  // Functions for dynamic lists
  const addItem = (
    list: string[],
    setList: (value: string[]) => void,
    value: string,
    setValue: (value: string) => void
  ) => {
    if (value.trim() !== "") {
      setList([...list, value.trim()]);
      setValue("");
    }
  };

  const removeItem = (
    list: string[],
    setList: (value: string[]) => void,
    index: number
  ) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
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
                placeholder="Например, Backend разработчик NodeJS"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание вакансии</Label>
              <Textarea
                id="description"
                placeholder="Опишите обязанности и требования"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Hard Skills</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {hardSkills.map((skill, index) => (
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
                      onClick={() =>
                        removeItem(hardSkills, setHardSkills, index)
                      }
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newHardSkill}
                  onChange={(e) => setNewHardSkill(e.target.value)}
                  placeholder="Добавить Hard Skill"
                />
                <Button
                  type="button"
                  onClick={() =>
                    addItem(
                      hardSkills,
                      setHardSkills,
                      newHardSkill,
                      setNewHardSkill
                    )
                  }
                  size="icon"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
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
                      onClick={() =>
                        removeItem(softSkills, setSoftSkills, index)
                      }
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
                <Button
                  type="button"
                  onClick={() =>
                    addItem(
                      softSkills,
                      setSoftSkills,
                      newSoftSkill,
                      setNewSoftSkill
                    )
                  }
                  size="icon"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="formatOfWork">Формат работы</Label>
              <Input
                id="formatOfWork"
                placeholder="Например, Удаленно, Офис"
                value={formatOfWork}
                onChange={(e) => setFormatOfWork(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employmentType">Тип занятости</Label>
              <Input
                id="employmentType"
                placeholder="Например, Полная"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
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
                  value={salaryFrom}
                  onChange={(e) => setSalaryFrom(Number(e.target.value))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryTo">Зарплата до</Label>
                <Input
                  id="salaryTo"
                  type="number"
                  placeholder="Максимальная зарплата"
                  value={salaryTo}
                  onChange={(e) => setSalaryTo(Number(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="task">Обязанности</Label>
              <Textarea
                id="task"
                placeholder="Опишите задачи"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Требования</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center"
                  >
                    {req}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2"
                      onClick={() =>
                        removeItem(requirements, setRequirements, index)
                      }
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newRequirement}
                  onChange={(e) => setNewRequirement(e.target.value)}
                  placeholder="Добавить требование"
                />
                <Button
                  type="button"
                  onClick={() =>
                    addItem(
                      requirements,
                      setRequirements,
                      newRequirement,
                      setNewRequirement
                    )
                  }
                  size="icon"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Местоположение</Label>
              <Input
                id="location"
                placeholder="Например, Алматы"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Дополнительно</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {additional.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center"
                  >
                    {item}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2"
                      onClick={() =>
                        removeItem(additional, setAdditional, index)
                      }
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newAdditional}
                  onChange={(e) => setNewAdditional(e.target.value)}
                  placeholder="Добавить информацию"
                />
                <Button
                  type="button"
                  onClick={() =>
                    addItem(
                      additional,
                      setAdditional,
                      newAdditional,
                      setNewAdditional
                    )
                  }
                  size="icon"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Контакты</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center"
                  >
                    {contact}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-2"
                      onClick={() => removeItem(contacts, setContacts, index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)}
                  placeholder="Добавить контакт"
                />
                <Button
                  type="button"
                  onClick={() =>
                    addItem(contacts, setContacts, newContact, setNewContact)
                  }
                  size="icon"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Создать вакансию
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default CreatePage;
