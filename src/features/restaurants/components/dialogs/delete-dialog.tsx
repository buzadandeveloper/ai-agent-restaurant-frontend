import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useDeleteRestaurant } from "@/features/restaurants/hooks";

interface DeleteDialogProps {
  restaurantId: number;
}

export const DeleteDialog = ({ restaurantId }: DeleteDialogProps) => {
  const { mutate: deleteRestaurant, isPending } = useDeleteRestaurant();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    deleteRestaurant(restaurantId, {
      onSuccess: () => {
        setIsOpen(false);
      }
    });
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive" size="sm" onClick={() => setIsOpen(true)}>
              <Trash2 className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete restaurant?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the restaurant and all of its
            data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending} onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={handleDelete}>
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
