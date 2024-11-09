import { Button } from "@/shared/shadcn/components/ui/button";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-1.5 text-gray-900">
          Freedom <p className="text-primary">Hire</p>
        </h1>
        <nav>
          <Link href={"/auth/login"}>
            <Button variant="ghost" className="mr-4">
              Войти
            </Button>
          </Link>
          <Link href={"/auth/login"}>
            <Button>Регистрация</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
