import { DeleteDialog } from "@components/common/delete-dialog/delete-dialog";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Label } from "@components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip";
import { useDeleteRestaurant } from "@features/restaurants/hooks";
import { Check, Copy, Edit, SquareArrowOutUpRight } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RestaurantData } from "@/types/index";
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
  const { mutate: deleteRestaurant, isPending } = useDeleteRestaurant();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<number | null>(null);

  const copyToClipboard = (configKey: string, id: number) => {
    navigator.clipboard.writeText(configKey);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleNavigateToRestaurantDetails = () => {
    navigate(`restaurant?id=${restaurant.id}`);
  };

  const handleDelete = () => {
    deleteRestaurant(restaurant.id!, {
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
                    isPending={isPending}
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

        <div className="pt-2 border-t">
          <Label className="text-xs text-muted-foreground mb-2 block">Config key</Label>
          <Card className="flex flex-row items-center justify-between rounded-md w-full px-2 py-0.5">
            <p className="font-mono text-sm opacity-50 cursor-default">{restaurant.configKey}</p>
            <Button
              variant="ghost"
              size="sm"
              className="w-7 h-6"
              onClick={() => copyToClipboard(restaurant.configKey!, restaurant.id!)}
            >
              {copiedKey === restaurant.id ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
