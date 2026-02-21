import { restaurantsQueryKeys } from "@services/restaurants/restaurants-service";
import { useQuery } from "@tanstack/react-query";

export const useGetRestaurants = () => {
  return useQuery(restaurantsQueryKeys.getRestaurants());
};
