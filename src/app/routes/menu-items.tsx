import { Home, MessageSquare, Settings, ShoppingCart, Store } from "lucide-react";
import { SettingsPage } from "@/features/settings";

export const MenuItems = [
  { path: "/dashboard", label: "Dashboard", icon: Home },
  { path: "/restaurants", label: "Restaurants", icon: Store },
  { path: "/orders", label: "Orders", icon: ShoppingCart },
  { path: "/ai-chat", label: "AI Chat", icon: MessageSquare },
  { path: "/settings", label: "Settings", icon: Settings, element: <SettingsPage /> }
];
