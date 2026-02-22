import { BackButton } from "@components/common/back-button/back-button";
import { useParams } from "react-router-dom";
import { TablesList } from "../components/tables-list/tables-list";

export const RestaurantTablesPage = () => {
  const params = useParams();
  const restaurantId = Number(params.restaurantId);

  return (
    <div>
      <BackButton />
      <TablesList restaurantId={restaurantId} />
    </div>
  );
};
