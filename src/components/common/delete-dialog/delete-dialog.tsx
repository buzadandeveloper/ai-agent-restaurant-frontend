import { Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
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

interface DeleteDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string;
  buttonTitle?: string;
  buttonTooltip?: string;
  handleDelete?: () => void;
  isPending?: boolean;
}

export const DeleteDialog = ({
  isOpen,
  setIsOpen,
  title,
  description,
  buttonTitle,
  buttonTooltip,
  handleDelete,
  isPending
}: DeleteDialogProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive" size="sm" onClick={() => setIsOpen(true)}>
              <Trash2 className="h-3 w-3" /> {buttonTitle || ""}
            </Button>
          </TooltipTrigger>
          {!buttonTitle && <TooltipContent>{buttonTooltip ? "" : "Delete"}</TooltipContent>}
        </Tooltip>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
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
