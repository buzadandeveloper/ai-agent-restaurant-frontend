import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DeleteDialog } from "@/components/common/delete-dialog/delete-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeleteRestaurantMenu, useUploadRestaurantMenu } from "@/features/restaurants/hooks";

export const ManageMenu = () => {
  const [searchParams] = useSearchParams();
  const restaurantId = Number(searchParams.get("id"));

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: deleteMenu, isPending: deleteMenuPending } = useDeleteRestaurantMenu();
  const { mutate: uploadMenu, isPending: uploadMenuPending } = useUploadRestaurantMenu();

  const handleDeleteMenu = () => {
    if (restaurantId)
      deleteMenu(restaurantId, {
        onSuccess: () => {
          setIsDeleteDialogOpen(false);
        }
      });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && restaurantId) {
      const formData = new FormData();
      formData.append("menuCsv", file);

      uploadMenu({ id: restaurantId, data: formData });
    }
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <Button size="sm" onClick={handleUploadClick} disabled={uploadMenuPending}>
        <Upload /> Upload menu
      </Button>
      <Input ref={fileInputRef} type="file" hidden={true} onChange={handleFileChange} />
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Menu"
        description="Are you sure you want to delete the entire menu? This action cannot be undone."
        buttonTitle="Delete menu"
        handleDelete={handleDeleteMenu}
        isPending={deleteMenuPending}
      />
    </div>
  );
};
