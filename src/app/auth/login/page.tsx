"use client";

import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/shared/shadcn/components/ui/radio-group";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/shadcn/components/ui/tabs";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("employee");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted", event.target);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Добро пожаловать</CardTitle>
          <CardDescription>
            Войдите или зарегистрируйтесь для продолжения
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-login">Email</Label>
                    <Input
                      id="email-login"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-login">Пароль</Label>
                    <Input id="password-login" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Войти
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-register">Email</Label>
                    <Input
                      id="email-register"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Пароль</Label>
                    <Input id="password-register" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Роль</Label>
                    <RadioGroup
                      defaultValue={role}
                      onValueChange={setRole}
                      className="flex"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="employee" id="employee" />
                        <Label htmlFor="employee">Работник</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="employer" id="employer" />
                        <Label htmlFor="employer">Работодатель</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full">
                    Зарегистрироваться
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Нажимая кнопку, вы соглашаетесь с нашими условиями использования
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
