import { Skeleton } from "../../ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "../../ui/table";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton = ({ rows = 6, columns = 7 }: TableSkeletonProps) => {
  const columnWidth = `${100 / columns}%`;

  return (
    <Table className="w-full table-fixed">
      <TableBody>
        {[...Array(rows)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {[...Array(columns)].map((_, colIndex) => (
              <TableCell key={colIndex} style={{ width: columnWidth }} className="p-3">
                <Skeleton className="h-4 w-full rounded" />
              </TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow className="border-t-2">
          {[...Array(columns)].map((_, colIndex) => (
            <TableCell key={colIndex} style={{ width: columnWidth }} className="p-3">
              <Skeleton className="h-4 w-full rounded" />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};
