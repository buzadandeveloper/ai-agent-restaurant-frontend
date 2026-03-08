import { SingleSelect } from "@components/common/single-select/single-select";
import { Card, CardContent } from "@components/ui/card";
import { useGetRestaurants } from "@hooks/useGetRestaurants";
import type { Dispatch, SetStateAction } from "react";
import type { TimeRangeData } from "../../constants/index";

interface ToolbarProps {
  timeRangeValue: string;
  setChartData: Dispatch<
    SetStateAction<{
      restaurantId: number | null;
      timeRange: TimeRangeData;
    }>
  >;
}

export const Toolbar = ({ timeRangeValue, setChartData }: ToolbarProps) => {
  const restaurants = useGetRestaurants();

  const restaurantOptions =
    restaurants?.data?.map((restaurant) => ({
      label: restaurant.name,
      value: String(restaurant.id)
    })) ?? [];

  const disabled = restaurants?.isLoading || restaurants?.data?.length === 0;

  const handleRestaurantChange = (value: string) => {
    setChartData((prev) => ({
      ...prev,
      restaurantId: Number(value)
    }));
  };

  const handleTimeRangeChange = (value: string) => {
    setChartData((prev) => ({
      ...prev,
      timeRange: value as TimeRangeData
    }));
  };

  return (
    <Card className="py-4">
      <CardContent className="flex items-center justify-end gap-2">
        <SingleSelect
          options={restaurantOptions}
          onChange={handleRestaurantChange}
          placeholder="Select restaurant"
          disabled={disabled}
        />
        <SingleSelect
          value={timeRangeValue}
          options={timeRangeOptions}
          onChange={handleTimeRangeChange}
          placeholder="Select range"
          disabled={disabled}
        />
      </CardContent>
    </Card>
  );
};

const timeRangeOptions = [
  { label: "Last 7 days", value: "last7d" },
  { label: "Last 30 days", value: "last30d" },
  { label: "Last 90 days", value: "last90d" }
];
