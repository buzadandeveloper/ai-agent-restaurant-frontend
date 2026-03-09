import { CardContent } from "@components/ui/card";
import { Skeleton } from "@components/ui/skeleton";

interface StatisticsAreaChartSkeletonProps {
  height?: number;
}

export const StatisticsAreaChartSkeleton = ({ height = 300 }: StatisticsAreaChartSkeletonProps) => {
  return (
    <CardContent className="px-2">
      <div className="w-full" style={{ height }}>
        <div className="flex h-full flex-col justify-between">
          <div className="relative flex-1 overflow-hidden rounded-md">
            <Skeleton className="absolute inset-0 h-full w-full rounded-md" />

            <div className="absolute inset-x-4 bottom-6 top-6 flex items-end gap-2">
              <Skeleton className="h-[18%] flex-1 rounded-sm" />
              <Skeleton className="h-[26%] flex-1 rounded-sm" />
              <Skeleton className="h-[22%] flex-1 rounded-sm" />
              <Skeleton className="h-[38%] flex-1 rounded-sm" />
              <Skeleton className="h-[30%] flex-1 rounded-sm" />
              <Skeleton className="h-[55%] flex-1 rounded-sm" />
              <Skeleton className="h-[44%] flex-1 rounded-sm" />
              <Skeleton className="h-[62%] flex-1 rounded-sm" />
              <Skeleton className="h-[48%] flex-1 rounded-sm" />
              <Skeleton className="h-[72%] flex-1 rounded-sm" />
              <Skeleton className="h-[58%] flex-1 rounded-sm" />
              <Skeleton className="h-[36%] flex-1 rounded-sm" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-2 px-1">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
          </div>
        </div>
      </div>
    </CardContent>
  );
};
