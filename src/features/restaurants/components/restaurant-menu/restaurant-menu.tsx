import { ManageMenu } from "./manage-menu";
import { MenuTable } from "./menu-table";

export const RestaurantMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Menu</h1>
      <MenuTable />
      <ManageMenu />
    </div>
  );
};
