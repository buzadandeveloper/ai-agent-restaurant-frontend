import { PageWrapper } from "@components/common/page-wrapper/page-wrapper";
import { TitlePage } from "@components/common/title-page/title-page";
import { useState } from "react";
import { RestaurantDialog } from "../components/dialog/restaurant-dialog";
import { RestaurantList } from "../components/restaurant-list/restaurant-list";
import type { RestaurantDialogData } from "../types/index";

export const RestaurantsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<RestaurantDialogData>({
    mode: null,
    data: null
  });

  return (
    <PageWrapper>
      <TitlePage title="Manage your restaurant locations">
        <RestaurantDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      </TitlePage>
      <div className="flex flex-col gap-4">
        <RestaurantList setIsDialogOpen={setIsDialogOpen} />
      </div>
    </PageWrapper>
  );
};
