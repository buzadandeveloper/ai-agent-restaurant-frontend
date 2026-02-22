import { Button } from "@components/ui/button";
import type { Table } from "@services/tables/tables-types";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TableCardProps {
  table: Table;
}

export const TableCard = ({ table }: TableCardProps) => {
  const navigate = useNavigate();

  const handleOpenTable = () => {
    navigate(`table/${table.id}`);
  };

  return (
    <Card className="gap-0">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Table {table.tableNumber}</CardTitle>
            <CardDescription>Active orders: {table.activeOrdersCount}</CardDescription>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              table.isOccupied ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {table.isOccupied ? "Occupied" : "Available"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Button variant="outline" onClick={() => handleOpenTable()}>
          Open
        </Button>
      </CardContent>
    </Card>
  );
};
