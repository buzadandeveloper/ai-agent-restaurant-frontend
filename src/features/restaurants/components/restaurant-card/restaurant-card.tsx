import { DeleteDialog } from "@components/common/delete-dialog/delete-dialog";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip";
import { Edit, SquareArrowOutUpRight } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RestaurantData } from "@/types/index";
import { useDeleteRestaurant } from "../../hooks/index";
import type { RestaurantDialogData } from "../../types/index";

interface RestaurantProps {
  restaurant: RestaurantData;
  setIsDialogOpen?: Dispatch<SetStateAction<RestaurantDialogData>>;
  withActionZone?: boolean;
}

export const RestaurantCard = ({
  restaurant,
  setIsDialogOpen = () => {},
  withActionZone = true
}: RestaurantProps) => {
  const navigate = useNavigate();
  const deleteRestaurant = useDeleteRestaurant();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleNavigateToRestaurantDetails = () => {
    if (restaurant.id) navigate(`restaurant/${restaurant.id}`);
  };

  const handleDelete = () => {
    if (restaurant.id)
      deleteRestaurant.mutate(restaurant.id, {
        onSuccess: () => {
          setIsDeleteDialogOpen(false);
        }
      });
  };

  return (
    <Card key={restaurant.id}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              {withActionZone ? (
                <Button
                  variant="link"
                  onClick={handleNavigateToRestaurantDetails}
                  className="!p-0 hover:opacity-80 text-xl"
                >
                  {restaurant.name}
                  <SquareArrowOutUpRight width={16} height={16} />
                </Button>
              ) : (
                restaurant.name
              )}
            </CardTitle>
            <CardDescription className="mt-1">{restaurant.address}</CardDescription>
          </div>
          {withActionZone ? (
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsDialogOpen({ mode: "edit", data: restaurant })}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Edit</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DeleteDialog
                    isOpen={isDeleteDialogOpen}
                    setIsOpen={setIsDeleteDialogOpen}
                    title="Are you sure you want to delete restaurant?"
                    description="This action cannot be undone. This will permanently delete the restaurant and all of its
            data."
                    handleDelete={handleDelete}
                    isPending={deleteRestaurant.isPending}
                  />
                </TooltipTrigger>
                <TooltipContent>Delete</TooltipContent>
              </Tooltip>
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className={`text-sm text-muted-foreground ${withActionZone ? "line-clamp-2" : ""}`}>
          {restaurant.description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Phone:</span>
            <p className="font-medium">{restaurant.phone}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Tables:</span>
            <p className="font-medium">{restaurant.numberOfTables}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Founder:</span>
            <p className="font-medium">{restaurant.founder}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Admin:</span>
            <p className="font-medium">{restaurant.administrator}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
