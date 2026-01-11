import { BackButton } from "@/components/common/back-button/back-button";
import { Restaurant } from "@/features/restaurants/components/restaurant/restaurant";

export const RestaurantPage = () => {
  return (
    <div>
      <BackButton />
      <Restaurant />
    </div>
  );
};
