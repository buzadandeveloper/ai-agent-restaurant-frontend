import { PageWrapper } from "@components/common/page-wrapper/page-wrapper";
import { TitlePage } from "@components/common/title-page/title-page";
import { RestaurantTableList } from "../components/index";

export const RestaurantsTablesManagementPage = () => {
  return (
    <PageWrapper>
      <TitlePage title="View restaurant tables" />
      <RestaurantTableList />
    </PageWrapper>
  );
};
