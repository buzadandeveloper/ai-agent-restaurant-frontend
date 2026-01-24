import { useSearchParams } from "react-router-dom";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { MenuTableSkeleton } from "@/features/restaurants/components/skeletons/menu-stable-skeleton";
import { useGetRestaurantMenu } from "@/features/restaurants/hooks";

export const MenuTable = () => {
  const [searchParams] = useSearchParams();
  const restaurantId = Number(searchParams.get("id"));

  const { data: menu, isLoading, isFetching } = useGetRestaurantMenu(restaurantId);

  if (isLoading || isFetching) return <MenuTableSkeleton />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TableHeads.map((head) => (
            <TableHead key={head}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu?.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.categoryName}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.allergens.length ? item.allergens.join(", ") : "-"}</TableCell>
            <TableCell>{item.tags.length ? item.tags.join(", ") : "-"}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.currency}</TableCell>
            <TableCell>{item.isAvailable ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption hidden={!!menu?.length}>
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No menu items</EmptyTitle>
            <EmptyDescription>
              You haven't added any menu items yet. Start by adding your first dish to the menu.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </TableCaption>
    </Table>
  );
};

const TableHeads = [
  "No.",
  "Name",
  "Category",
  "Description",
  "Allergens",
  "Tags",
  "Price",
  "Currency",
  "Availability"
];
