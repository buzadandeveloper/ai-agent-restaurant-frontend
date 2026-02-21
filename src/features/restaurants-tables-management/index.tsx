import { RestaurantTableList } from "./components/restaurant-table-list/restaurant-table-list";

export const RestaurantsTablesManagementPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">View restaurant tables</p>
        </div>
      </div>
      <RestaurantTableList />
    </div>
  );
};
