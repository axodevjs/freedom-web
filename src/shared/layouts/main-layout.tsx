import { Header } from "@/widgets/header/ui/header";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container mx-auto px-4 py-8">{children}</main>
  </div>
);
