import { useState } from "react";
import { RestaurantDialog } from "@/features/restaurants/components/dialogs/restaurant-dialog";
import { Restaurants } from "@/features/restaurants/components/restaurants/restaurants";
import type { RestaurantDialogData } from "@/features/restaurants/types/index.types";

export const RestaurantsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<RestaurantDialogData>({
    mode: null,
    data: null
  });

  return (
    <div className="flex flex-col gap-6">
      <RestaurantDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <div className="flex flex-col gap-4">
        <Restaurants setIsDialogOpen={setIsDialogOpen} />
      </div>
    </div>
  );
};
