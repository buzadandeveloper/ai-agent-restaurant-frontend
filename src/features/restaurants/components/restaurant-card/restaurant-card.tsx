import { Check, Copy, Edit } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DeleteDialog } from "@/features/restaurants/components/dialogs/delete-dialog";
import type { RestaurantDialogData } from "@/features/restaurants/types/index.types";
import type { RestaurantData } from "@/services/restaurants/restaurants.types";

interface RestaurantProps {
  restaurant: RestaurantData;
  setIsDialogOpen: Dispatch<SetStateAction<RestaurantDialogData>>;
}

export const RestaurantCard = ({ restaurant, setIsDialogOpen }: RestaurantProps) => {
  const [copiedKey, setCopiedKey] = useState<number | null>(null);

  const copyToClipboard = (configKey: string, id: number) => {
    navigator.clipboard.writeText(configKey);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <Card key={restaurant.id}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{restaurant.name}</CardTitle>
            <CardDescription className="mt-1">{restaurant.address}</CardDescription>
          </div>
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
                <DeleteDialog restaurantId={restaurant.id!} />
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{restaurant.description}</p>

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
