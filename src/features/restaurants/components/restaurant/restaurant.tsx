import { useSearchParams } from "react-router-dom";
import { RestaurantCard } from "@/features/restaurants/components/restaurant-card/restaurant-card";
import { RestaurantCardSkeleton } from "@/features/restaurants/components/skeletons/restaurant-card-skeleton";
import { useGetRestaurant } from "@/features/restaurants/hooks";

export const Restaurant = () => {
  const [searchParams] = useSearchParams();
  const restaurantId = searchParams.get("id");

  const { data: restaurant, isLoading } = useGetRestaurant(Number(restaurantId) || 0);

  if (isLoading) {
    return <RestaurantCardSkeleton withActionZone={false} />;
  }

  return (
    <div>
      <RestaurantCard restaurant={restaurant!} withActionZone={false} />
    </div>
  );
};
