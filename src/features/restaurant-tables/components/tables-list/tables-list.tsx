import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetRestaurantsTables } from "../../hooks/index";
import { TableCard } from "./table-card";
import { TableCardSkeleton } from "./table-card-skeleton";

export const TablesList = () => {
  const { restaurantId } = useParams();

  const restaurantTables = useGetRestaurantsTables(Number(restaurantId));

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Tables from {restaurantTables?.data?.restaurantName}</CardTitle>
            <CardDescription>Manage restaurant tables</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {restaurantTables?.isLoading &&
            Array.from({ length: 6 }).map((_, index) => <TableCardSkeleton key={index} />)}
          {restaurantTables?.data?.tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
