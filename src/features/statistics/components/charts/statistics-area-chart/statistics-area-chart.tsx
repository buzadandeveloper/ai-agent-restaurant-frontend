import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { StatisticsAreaChartSkeleton } from "./statistics-area-chart-skeleton";

interface StatisticsAreaChartProps<TData> {
  data: TData[];
  isLoading?: boolean;
  config: ChartConfig;
  title: string;
  dataKey: string;
  type?: "monotone" | "linear" | "natural";
  height?: number;
}

export const StatisticsAreaChart = <TData extends { date: string }>({
  data,
  isLoading,
  config,
  title,
  dataKey,
  type = "monotone",
  height = 300
}: StatisticsAreaChartProps<TData>) => {
  const gradientId = `fill-${dataKey}`;

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2">
        {isLoading ? (
          <StatisticsAreaChartSkeleton />
        ) : !data?.length ? (
          <div className="flex items-center justify-center text-sm" style={{ height }}>
            Please select a restaurant to view statistics.
          </div>
        ) : (
          <ChartContainer config={config} className={`aspect-auto w-full`} style={{ height }}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={`var(--color-${dataKey})`} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={`var(--color-${dataKey})`} stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  });
                }}
              />

              <YAxis tickLine={false} axisLine={false} tickMargin={8} />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })
                    }
                    indicator="dot"
                  />
                }
              />

              <Area
                dataKey={dataKey}
                type={type}
                fill={`url(#${gradientId})`}
                stroke={`var(--color-${dataKey})`}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};
