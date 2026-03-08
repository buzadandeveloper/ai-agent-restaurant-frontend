import { statisticsQueryKeys } from "@services/statistics/statistics-service";
import { useQuery } from "@tanstack/react-query";
import type { ChartConfig } from "@/components/ui/chart";
import type { TimeRangeData } from "../../constants/index";
import { getTimeRange } from "../../utils/index";
import { StatisticsAreaChart } from "../charts/statistics-area-chart/statistics-area-chart";

interface RestaurantOrdersChartsProps {
  chartData: {
    restaurantId: number | null;
    timeRange: TimeRangeData;
  };
}

export const RestaurantOrdersCharts = ({ chartData }: RestaurantOrdersChartsProps) => {
  const statistics = useQuery({
    ...statisticsQueryKeys.dailyStats(chartData.restaurantId!, getTimeRange(chartData.timeRange)),
    enabled: !!chartData.restaurantId
  });

  return (
    <div className="space-y-4">
      <StatisticsAreaChart
        data={statistics?.data?.dailyData ?? []}
        isLoading={statistics.isLoading}
        config={chartConfig}
        title="Restaurant total orders revenue"
        dataKey="totalRevenue"
      />
      <StatisticsAreaChart
        data={statistics?.data?.dailyData ?? []}
        isLoading={statistics.isLoading}
        config={chartConfig}
        title="Restaurant total orders count"
        dataKey="ordersCount"
      />
    </div>
  );
};

const chartConfig = {
  ordersCount: {
    label: "Orders count",
    color: "var(--chart-2)"
  },
  totalRevenue: {
    label: "Total revenue",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig;
