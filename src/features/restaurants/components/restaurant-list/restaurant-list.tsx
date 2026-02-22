import { useGetRestaurants } from "@hooks/index";
import type { Dispatch, SetStateAction } from "react";
import type { RestaurantDialogData } from "../../types/index";
import { RestaurantCard, RestaurantCardSkeleton } from "../restaurant-card/index";

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
