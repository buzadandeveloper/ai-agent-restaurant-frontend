import { TableSkeleton } from "@components/common/table-skeleton/table-skeleton";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@components/ui/empty";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@components/ui/table";
import { useGetRestaurantMenu } from "@features/restaurants/hooks";

interface MenuTableProps {
  restaurantId: number;
}

export const MenuTable = ({ restaurantId }: MenuTableProps) => {
  const menu = useGetRestaurantMenu(restaurantId);

  if (menu.isLoading || menu.isFetching)
    return <TableSkeleton rows={4} columns={tableHeaders.length} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((head) => (
            <TableHead key={head}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu.data?.map((item, index) => (
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
      <TableCaption hidden={!!menu.data?.length}>
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

const tableHeaders = [
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
