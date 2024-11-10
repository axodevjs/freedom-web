import { useAuthStore } from "@/shared/model/use-auth-store";
import { Avatar, AvatarFallback } from "@/shared/shadcn/components/ui/avatar";
import { Button } from "@/shared/shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/shadcn/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export const Header: React.FC = () => {
  const { isAuth, setIsAuth, checkAuth } = useAuthStore();

  const logout = () => {
    localStorage.removeItem("accessToken");
    checkAuth();
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-1.5 text-gray-900">
          Freedom <p className="text-primary">Hire</p>
        </h1>
        <nav>
          {isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-10 h-10 rounded-full p-0">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Выйти</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href={"/auth/login"}>
                <Button variant="ghost" className="mr-4">
                  Войти
                </Button>
              </Link>
              <Link href={"/auth/login"}>
                <Button>Регистрация</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
