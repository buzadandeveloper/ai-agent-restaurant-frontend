import { Header } from "@components/layout/header";
import { Sidebar } from "@components/layout/sidebar";
import { ScrollArea } from "@components/ui/scroll-area";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden w-full bg-background">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6">
          <ScrollArea className="h-[calc(100vh-112px)] pr-4">
            <Outlet />
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};
