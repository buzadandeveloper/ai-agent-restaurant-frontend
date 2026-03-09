import { statisticsQueryKeys } from "@services/statistics/statistics-service";
import type { Period } from "@services/statistics/statistics-types";
import { useQuery } from "@tanstack/react-query";

export const useGetDailyStatistics = (restaurantId: number | null, params: Period) => {
  return useQuery({
    ...statisticsQueryKeys.dailyStats(restaurantId!, params),
    enabled: !!restaurantId
  });
};
