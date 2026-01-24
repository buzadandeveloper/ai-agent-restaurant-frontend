import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export const MenuTableSkeleton = () => {
  const rows = 5;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TableHeads.map((head) => (
            <TableHead key={head}>
              <Skeleton className="h-4 w-16 rounded" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {[...Array(rows)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {TableHeads.map((_, colIndex) => (
              <TableCell key={colIndex}>
                <Skeleton className="h-4 w-[80%] rounded" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
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
