import { useGetRestaurant } from "../../hooks/index";
import { RestaurantCard, RestaurantCardSkeleton } from "../restaurant-card/index";

interface RestaurantProps {
  restaurantId: number;
}

export const Restaurant = ({ restaurantId }: RestaurantProps) => {
  const restaurant = useGetRestaurant(restaurantId);

  if (restaurant.isLoading) {
    return <RestaurantCardSkeleton withActionZone={false} />;
  }

  return (
    <div>
      <RestaurantCard restaurant={restaurant.data!} withActionZone={false} />
    </div>
  );
};
