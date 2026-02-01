import { BackButton } from "@components/common/back-button/back-button";
import { Restaurant } from "@features/restaurants/components/restaurant/restaurant";
import { RestaurantMenu } from "@features/restaurants/components/restaurant-menu/restaurant-menu";

export const RestaurantPage = () => {
  return (
    <div>
      <BackButton />
      <div className="flex flex-col gap-4">
        <Restaurant />
        <RestaurantMenu />
      </div>
    </div>
  );
};
