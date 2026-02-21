import { Button } from "@components/ui/button";
import { Home, MessageSquare, Settings, ShoppingCart, Store } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
}

export const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <aside
      className={`${sidebarOpen ? "w-64" : "w-0"} border-r bg-card transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">AI Restaurant</h2>
          <div className="space-y-1">
            {MenuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant={activeTab === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleTabClick(item.path)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

const MenuItems = [
  { path: "/dashboard", label: "Dashboard", icon: Home },
  { path: "/restaurants", label: "Restaurants", icon: Store },
  { path: "/restaurants-tables-management", label: "Tables", icon: ShoppingCart },
  { path: "/ai-chat", label: "AI Chat", icon: MessageSquare },
  { path: "/settings", label: "Settings", icon: Settings }
];
