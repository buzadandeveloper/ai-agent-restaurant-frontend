import { useGetRestaurants } from "@hooks/index";
import { RestaurantTableCard } from "./restaurant-table-card";
import { RestaurantTableCardSkeleton } from "./restaurant-table-card-skeleton";

export const RestaurantTableList = () => {
  const restaurants = useGetRestaurants();

  if (restaurants.isLoading)
    return Array.from({ length: 5 }).map((_, index) => <RestaurantTableCardSkeleton key={index} />);

  return restaurants?.data?.map((restaurant) => (
    <RestaurantTableCard key={restaurant.id} restaurant={restaurant} />
  ));
};
