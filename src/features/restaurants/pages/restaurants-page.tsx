import { useState } from "react";
import { RestaurantDialog } from "../components/dialog/restaurant-dialog";
import { RestaurantList } from "../components/restaurant-list/restaurant-list";
import type { RestaurantDialogData } from "../types/index";

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
