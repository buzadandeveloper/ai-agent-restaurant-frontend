import { BackButton } from "@components/common/back-button/back-button";
import { useParams } from "react-router-dom";
import { OrdersTable } from "../components/table-orders/table-orders";

export const RestaurantTablePage = () => {
  const params = useParams();

  const restaurantId = Number(params.restaurantId);
  const tableId = Number(params.tableId);

  return (
    <div>
      <BackButton />
      <OrdersTable restaurantId={restaurantId} tableId={tableId} />
    </div>
  );
};
