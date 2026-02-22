import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { RestaurantData } from "@/types/index";

interface RestaurantTableCardProps {
  restaurant: RestaurantData;
}

export const RestaurantTableCard = ({ restaurant }: RestaurantTableCardProps) => {
  const navigate = useNavigate();

  const handleViewTables = () => {
    if (restaurant.id) navigate(`restaurant/${restaurant.id}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{restaurant.name}</CardTitle>
        <CardDescription>{restaurant.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Tables</p>
            <p className="text-2xl font-bold">{restaurant.numberOfTables}</p>
          </div>
          <Button variant="ghost" onClick={() => handleViewTables()}>
            View Tables <MoveRight />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
