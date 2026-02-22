import { ManageMenu } from "./manage-menu";
import { MenuTable } from "./menu-table";

interface RestaurantMenuProps {
  restaurantId: number;
}

export const RestaurantMenu = ({ restaurantId }: RestaurantMenuProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Menu</h1>
      <MenuTable restaurantId={restaurantId} />
      <ManageMenu restaurantId={restaurantId} />
    </div>
  );
};
