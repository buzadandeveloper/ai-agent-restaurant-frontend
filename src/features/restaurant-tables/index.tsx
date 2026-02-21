import { BackButton } from "@components/common/back-button/back-button";
import { TablesList } from "./components/tables-list/tables-list";

export const RestaurantTablesPage = () => {
  return (
    <div>
      <BackButton />
      <TablesList />
    </div>
  );
};
