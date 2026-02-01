import { RestaurantDialog } from "@features/restaurants/components/dialog/restaurant-dialog";
import { RestaurantList } from "@features/restaurants/components/restaurant-list/restaurant-list";
import type { RestaurantDialogData } from "@features/restaurants/types/index";
import { useState } from "react";

export const RestaurantsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<RestaurantDialogData>({
    mode: null,
    data: null
  });

  return (
    <div className="flex flex-col gap-6">
      <RestaurantDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <div className="flex flex-col gap-4">
        <RestaurantList setIsDialogOpen={setIsDialogOpen} />
      </div>
    </div>
  );
};
