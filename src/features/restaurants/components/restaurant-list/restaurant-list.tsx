import { RestaurantCard } from "@features/restaurants/components/restaurant-card/restaurant-card";
import { RestaurantCardSkeleton } from "@features/restaurants/components/skeletons/restaurant-card-skeleton";
import type { RestaurantDialogData } from "@features/restaurants/types/index";
import { useGetRestaurants } from "@hooks/index";
import type { Dispatch, SetStateAction } from "react";

interface RestaurantsProps {
  setIsDialogOpen: Dispatch<SetStateAction<RestaurantDialogData>>;
}

export const RestaurantList = ({ setIsDialogOpen }: RestaurantsProps) => {
  const { data: restaurants, isLoading } = useGetRestaurants();

  if (isLoading) {
    return [1, 2, 3].map((skeleton) => <RestaurantCardSkeleton key={skeleton} />);
  }

  return restaurants?.map((restaurant) => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} setIsDialogOpen={setIsDialogOpen} />
  ));
};
