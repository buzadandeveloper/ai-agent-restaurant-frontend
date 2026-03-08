import { PageWrapper } from "@components/common/page-wrapper/page-wrapper";
import { TitlePage } from "@components/common/title-page/title-page";
import { useState } from "react";
import { RestaurantOrdersCharts } from "./components/restaurant-orders-charts/restaurant-orders-charts";
import { Toolbar } from "./components/toolbar/toolbar";
import type { TimeRangeData } from "./constants/index";

export const StatisticsPage = () => {
  const [chartData, setChartData] = useState<{
    restaurantId: number | null;
    timeRange: TimeRangeData;
  }>({
    restaurantId: null,
    timeRange: "last7d"
  });

  return (
    <PageWrapper>
      <TitlePage title="View restaurant statistics" />
      <Toolbar timeRangeValue={chartData.timeRange} setChartData={setChartData} />
      <RestaurantOrdersCharts chartData={chartData} />
    </PageWrapper>
  );
};
