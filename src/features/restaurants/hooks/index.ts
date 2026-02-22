import {
  restaurantsQueryKeys,
  restaurantsService
} from "@services/restaurants/restaurants-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { RestaurantData } from "@/types/index";

export const useGetRestaurant = (id: number) => {
  return useQuery(restaurantsQueryKeys.getRestaurantById(id));
};

export const useCreateRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => restaurantsService.createRestaurant(data),
    onSuccess: (data) => {
      queryClient.setQueryData(
        restaurantsQueryKeys.getRestaurants().queryKey,
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
        restaurantsQueryKeys.getRestaurants().queryKey,
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
        restaurantsQueryKeys.getRestaurants().queryKey,
        (oldData: RestaurantData[]) =>
          oldData.filter((restaurant) => restaurant.id !== data.restaurantId)
      );
    }
  });
};

export const useGetRestaurantMenu = (id: number) => {
  return useQuery(restaurantsQueryKeys.getRestaurantMenu(id));
};

export const useUploadRestaurantMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) =>
      restaurantsService.uploadRestaurantMenu(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: restaurantsQueryKeys.getRestaurantMenu(variables.id).queryKey
      });
    }
  });
};

export const useDeleteRestaurantMenu = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => restaurantsService.deleteRestaurantMenu(id),
    onSuccess: (_, restaurantId) => {
      queryClient.setQueryData(
        restaurantsQueryKeys.getRestaurantMenu(restaurantId).queryKey,
        () => {
          return null;
        }
      );
    }
  });
};
