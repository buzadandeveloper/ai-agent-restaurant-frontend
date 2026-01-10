import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MenuItems } from "@/app/routes";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <header className="w-full sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
      <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-5 w-5" />
      </Button>
      <h1 className="text-xl font-semibold">
        {MenuItems.find((item) => item.path === location.pathname)?.label}
      </h1>
    </header>
  );
};
