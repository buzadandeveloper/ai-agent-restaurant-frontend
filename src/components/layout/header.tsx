import { Button } from "@components/ui/button";
import { Menu } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <header className="w-full sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
      <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};
