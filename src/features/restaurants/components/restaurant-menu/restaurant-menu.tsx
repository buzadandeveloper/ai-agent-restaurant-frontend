import { ManageMenu } from "@/features/restaurants/components/restaurant-menu/manage-menu";
import { MenuTable } from "@/features/restaurants/components/restaurant-menu/menu-table";

export const RestaurantMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Menu</h1>
      <MenuTable />
      <ManageMenu />
    </div>
  );
};
