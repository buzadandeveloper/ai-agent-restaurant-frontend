import { request } from "@lib/api/request";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { Period, RestaurantStatisticsData } from "./statistics-types";

class StatisticsService {
  getDailyStats = (restaurantId: number, params: Period): Promise<RestaurantStatisticsData> =>
    request.get(`/api/statistics/restaurant/${restaurantId}/daily`, { params });
}

export const statisticsService = new StatisticsService();

export const statisticsQueryKeys = createQueryKeys("statistics", {
  dailyStats: (restaurantId: number, params: Period) => ({
    queryKey: ["dailyStats", restaurantId, params],
    queryFn: () => statisticsService.getDailyStats(restaurantId, params)
  })
});
