"use client";

import { login, registerUser } from "@/features/auth/api/api.auth";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Неверный формат email").nonempty("Email обязателен"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

const registerSchema = z.object({
  email: z.string().email("Неверный формат email").nonempty("Email обязателен"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
  username: z
    .string()
    .min(3, "Имя пользователя должно быть не менее 3 символов"),
  role: z.enum(["User", "HR"]),
});

// Types inferred from schemas
type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function LoginPage() {
  const [role, setRole] = useState("User");
  const router = useRouter();

  // Form for Login
  const {
    handleSubmit: handleLoginSubmit,
    register: registerLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // Form for Register
  const {
    handleSubmit: handleRegisterSubmit,
    control,
    register: registerRegister,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "User" },
  });

  const onLoginSubmit = async (data: LoginFormValues) => {
    const result = await login(data);
    localStorage.setItem("accessToken", result.data.accessToken);
    localStorage.setItem("refreshToken", result.data.refreshToken);
    localStorage.setItem("id", result.data.id);
    localStorage.setItem("role", role);
    router.push("/");
    console.log("Register Form Submitted:", result);
  };

  const onRegisterSubmit = async (data: RegisterFormValues) => {
    const result = await registerUser(data);
    localStorage.setItem("accessToken", result.data.accessToken);
    localStorage.setItem("refreshToken", result.data.refreshToken);
    localStorage.setItem("id", result.data.id);
    localStorage.setItem("role", role);
    router.push("/");
    console.log("Register Form Submitted:", result);
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
              <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-login">Email</Label>
                    <Input
                      id="email-login"
                      type="email"
                      placeholder="m@example.com"
                      {...registerLogin("email")}
                    />
                    {loginErrors.email && (
                      <p className="text-red-500 text-sm">
                        {loginErrors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-login">Пароль</Label>
                    <Input
                      id="password-login"
                      type="password"
                      {...registerLogin("password")}
                    />
                    {loginErrors.password && (
                      <p className="text-red-500 text-sm">
                        {loginErrors.password.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full">
                    Войти
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username-register">Имя пользователя</Label>
                    <Input
                      id="username-register"
                      type="text"
                      placeholder="Ваше имя пользователя"
                      {...registerRegister("username")}
                    />
                    {registerErrors.username && (
                      <p className="text-red-500 text-sm">
                        {registerErrors.username.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-register">Email</Label>
                    <Input
                      id="email-register"
                      type="email"
                      placeholder="m@example.com"
                      {...registerRegister("email")}
                    />
                    {registerErrors.email && (
                      <p className="text-red-500 text-sm">
                        {registerErrors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Пароль</Label>
                    <Input
                      id="password-register"
                      type="password"
                      {...registerRegister("password")}
                    />
                    {registerErrors.password && (
                      <p className="text-red-500 text-sm">
                        {registerErrors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Роль</Label>
                    <Controller
                      name="role"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          {...field}
                          onValueChange={(value) => {
                            field.onChange(value);
                            setRole(value);
                          }}
                          className="flex"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="User" id="user" />
                            <Label htmlFor="user">Работник</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="HR" id="hr" />
                            <Label htmlFor="hr">Работодатель</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                    {registerErrors.role && (
                      <p className="text-red-500 text-sm">
                        {registerErrors.role.message}
                      </p>
                    )}
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
