import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Label } from "@components/ui/label";
import { Skeleton } from "@components/ui/skeleton";

interface RestaurantCardSkeletonProps {
  withActionZone?: boolean;
}

export const RestaurantCardSkeleton = ({ withActionZone = true }: RestaurantCardSkeletonProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          {withActionZone ? (
            <>
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="w-7 h-7 rounded-full" />
                <Skeleton className="w-7 h-7 rounded-full" />
              </div>
            </>
          ) : (
            <div className="flex w-full">
              <Skeleton className="h-5 w-3/4 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <Skeleton className="h-12 w-full rounded" />
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="space-y-1">
              <Skeleton className="h-3 w-2/3 rounded" />
              <Skeleton className="h-3 w-1/2 rounded" />
            </div>
          ))}
        </div>
        <div className="pt-2 border-t">
          <Label className="text-xs text-muted-foreground mb-2 block">Config key</Label>
          <Skeleton className="h-8 w-full rounded" />
        </div>
      </CardContent>
    </Card>
  );
};
