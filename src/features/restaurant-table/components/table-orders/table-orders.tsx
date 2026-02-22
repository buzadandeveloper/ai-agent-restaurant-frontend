import { TableSkeleton } from "@components/common/table-skeleton/table-skeleton";
import { useParams } from "react-router-dom";
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
import { useGetRestaurantTableById } from "../../hooks/index";

export const OrdersTable = () => {
  const { restaurantId, tableId } = useParams();

  const table = useGetRestaurantTableById(Number(restaurantId), Number(tableId));

  const rows =
    table?.data?.orders.flatMap((order) =>
      order.items.map((item) => {
        const unitPrice = Number(item.price);
        const rowTotal = unitPrice * item.quantity;

        return {
          key: `${order.id}-${item.id}`,
          itemName: item.menuItem.name,
          quantity: item.quantity,
          unitPrice,
          rowTotal,
          currency: order.currency
        };
      })
    ) ?? [];

  const grandTotal = rows.reduce((sum, row) => sum + row.rowTotal, 0);
  const currency = rows[0]?.currency;

  if (table.isLoading) return <TableSkeleton rows={5} columns={tableHeaders.length} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={row.key}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{row.itemName}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.unitPrice.toFixed(2)}</TableCell>
            <TableCell>{row.rowTotal.toFixed(2)}</TableCell>
            <TableCell>{row.currency}</TableCell>
          </TableRow>
        ))}
        {rows.length > 0 && (
          <TableRow className="border-t-2 font-semibold">
            <TableCell colSpan={5} className="text-right">
              Total Price:
            </TableCell>
            <TableCell>
              {grandTotal.toFixed(2)} {currency}
            </TableCell>
          </TableRow>
        )}
      </TableBody>

      <TableCaption hidden={!!rows.length}>
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No orders</EmptyTitle>
            <EmptyDescription>There are no orders for this table yet.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </TableCaption>
    </Table>
  );
};

const tableHeaders = ["No.", "Item", "Quantity", "Unit Price", "Row Total", "Currency"];
