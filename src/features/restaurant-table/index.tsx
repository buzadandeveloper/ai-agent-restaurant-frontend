import { BackButton } from "@components/common/back-button/back-button";
import { OrdersTable } from "./components/table-orders/table-orders";

export const RestaurantTablePage = () => {
  return (
    <div>
      <BackButton />
      <OrdersTable />
    </div>
  );
};
