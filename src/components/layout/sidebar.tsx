import { Button } from "@components/ui/button";
import { Home, LogOut, Settings, ShoppingCart, Store } from "lucide-react";
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

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/authenticate?tab=login");
  };

  return (
    <aside
      className={`${sidebarOpen ? "w-64" : "w-0"} border-r bg-card transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4 h-full">
        <div className="px-3 py-2 h-full">
          <h2 className="mb-2 px-4 text-lg font-semibold">AI Restaurant</h2>
          <div className="flex flex-col justify-between h-[calc(100%-36px)]">
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
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleLogOut()}>
              <LogOut />
              Log out
            </Button>
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
  { path: "/settings", label: "Settings", icon: Settings }
];
