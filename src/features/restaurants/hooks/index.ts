import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  restaurantsQueryKeys,
  restaurantsService
} from "@/services/restaurants/restaurants.service";
import type { RestaurantData } from "@/services/restaurants/restaurants.types";

export const useGetRestaurants = () => {
  return useQuery(restaurantsQueryKeys.getRestaurants());
};

export const useGetRestaurant = (id: number) => {
  return useQuery(restaurantsQueryKeys.getRestaurantById(id));
};

export const useCreateRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => restaurantsService.createRestaurant(data),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["restaurants", "getRestaurants", "myRestaurants"],
        (oldData: RestaurantData[]) => {
          return [...oldData, data.restaurant];
        }
      );
    }
  });
};

export const useUpdateRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) =>
      restaurantsService.updateRestaurant(id, data),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["restaurants", "getRestaurants", "myRestaurants"],
        (oldData: RestaurantData[]) =>
          oldData.map((restaurant) =>
            restaurant.id === data.restaurant.id ? data.restaurant : restaurant
          )
      );
    }
  });
};

export const useDeleteRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => restaurantsService.deleteRestaurant(id),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["restaurants", "getRestaurants", "myRestaurants"],
        (oldData: RestaurantData[]) =>
          oldData.filter((restaurant) => restaurant.id !== data.restaurantId)
      );
    }
  });
};
