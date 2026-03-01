import { PageWrapper } from "@components/common/page-wrapper/page-wrapper";
import { TitlePage } from "@components/common/title-page/title-page";
import { RestaurantTableList } from "../components/restaurant-table-list/restaurant-table-list";

export const RestaurantsTablesManagementPage = () => {
  return (
    <PageWrapper>
      <TitlePage title="View restaurant tables" />
      <RestaurantTableList />
    </PageWrapper>
  );
};
