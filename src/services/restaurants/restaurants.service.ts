import { createQueryKeys } from "@lukemorales/query-key-factory";
import { request } from "@/lib/request";
import type {
  RestaurantData,
  RestaurantIdResponse,
  RestaurantMenuItem,
  RestaurantResponse
} from "./restaurants.types";

class RestaurantsService {
  getRestaurants = (): Promise<RestaurantData[]> => request.get("/api/restaurant/my-restaurants");

  getRestaurantById = (id: number): Promise<RestaurantData> => request.get(`/api/restaurant/${id}`);

  createRestaurant = (data: FormData): Promise<RestaurantResponse> =>
    request.post("/api/restaurant/create", data);

  updateRestaurant = (id: number, data: FormData): Promise<RestaurantResponse> =>
    request.put(`/api/restaurant/${id}`, data);

  deleteRestaurant = (id: number): Promise<RestaurantIdResponse> =>
    request.delete(`/api/restaurant/${id}`);

  getRestaurantMenu = (id: number): Promise<RestaurantMenuItem[]> =>
    request.get(`/api/restaurant/${id}/menu`);

  uploadRestaurantMenu = (id: number, data: FormData): Promise<RestaurantIdResponse> =>
    request.post(`/api/restaurant/${id}/menu`, data);

  deleteRestaurantMenu = (id: number): Promise<RestaurantIdResponse> =>
    request.delete(`/api/restaurant/${id}/menu`);
}

export const restaurantsService = new RestaurantsService();

export const restaurantsQueryKeys = createQueryKeys("restaurants", {
  getRestaurants: () => ({
    queryKey: ["myRestaurants"],
    queryFn: () => restaurantsService.getRestaurants()
  }),
  getRestaurantById: (id: number) => ({
    queryKey: ["restaurant", id],
    queryFn: () => restaurantsService.getRestaurantById(id)
  }),
  getRestaurantMenu: (id: number) => ({
    queryKey: ["restaurant", "menu", id],
    queryFn: () => restaurantsService.getRestaurantMenu(id)
  })
});
