import { BackButton } from "@components/common/back-button/back-button";
import { useParams } from "react-router-dom";
import { Restaurant } from "../components/restaurant/restaurant";
import { RestaurantMenu } from "../components/restaurant-menu/restaurant-menu";

export const RestaurantPage = () => {
  const params = useParams();
  const restaurantId = Number(params.restaurantId);

  return (
    <div>
      <BackButton />
      <div className="flex flex-col gap-4">
        <Restaurant restaurantId={restaurantId} />
        <RestaurantMenu restaurantId={restaurantId} />
      </div>
    </div>
  );
};
