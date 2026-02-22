import { FormFieldWithTypes } from "@components/common/form/form-field-with-types";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { RestaurantData } from "@/types/index";
import { useCreateRestaurant, useUpdateRestaurant } from "../../hooks/index";
import { getRestaurantDialogSchema } from "../../schemas/restaurant-dialog.schemas";
import type { RestaurantDialogData } from "../../types/index";

interface RestaurantDialogProps {
  isDialogOpen: RestaurantDialogData;
  setIsDialogOpen: Dispatch<SetStateAction<RestaurantDialogData>>;
}

export const RestaurantDialog = ({ isDialogOpen, setIsDialogOpen }: RestaurantDialogProps) => {
  const modalData = isDialogOpen.data;
  const isCreateMode = isDialogOpen.mode === "create";
  const isEditMode = isDialogOpen.mode === "edit";

  const form = useForm<RestaurantData>({
    resolver: zodResolver(getRestaurantDialogSchema(isEditMode)),
    defaultValues
  });

  const createRestaurant = useCreateRestaurant();
  const updateRestaurant = useUpdateRestaurant();

  const inPending = createRestaurant.isPending || updateRestaurant.isPending;

  useEffect(() => {
    if (!modalData) return;

    form.reset(modalData);
  }, [modalData, form]);

  const handleClose = () => {
    setIsDialogOpen({ mode: null, data: null });
    form.reset(defaultValues);
  };

  const onSubmit = (data: RestaurantData) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("founder", data.founder);
    formData.append("administrator", data.administrator);
    formData.append("numberOfTables", data.numberOfTables.toString());
    formData.append("phone", data.phone);
    formData.append("address", data.address);

    if (data.menuCsv) {
      formData.append("menuCsv", data.menuCsv);
    }

    if (isCreateMode) {
      createRestaurant.mutate(formData, {
        onSuccess: () => {
          handleClose();
        }
      });
    } else {
      const restaurantId = modalData?.id;
      if (!restaurantId) return;

      updateRestaurant.mutate(
        { id: restaurantId, data: formData },
        {
          onSuccess: () => {
            handleClose();
          }
        }
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Manage your restaurant locations</p>
        <Dialog
          open={isDialogOpen.mode !== null}
          onOpenChange={(open) => {
            if (!open) handleClose();
          }}
        >
          <DialogTrigger asChild>
            <Button onClick={() => setIsDialogOpen({ mode: "create", data: null })}>
              <Plus className="mr-2 h-4 w-4" />
              Add Restaurant
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isCreateMode ? "Add new restaurant" : "Edit restaurant"}</DialogTitle>
              <DialogDescription>
                {isCreateMode
                  ? "Enter the details for the new restaurant"
                  : "Update the restaurant details"}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form id="restaurant-dialog-form" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4 flex flex-col gap-2">
                  <div className="flex w-full gap-4">
                    <FormFieldWithTypes
                      form={form}
                      type="text"
                      name="name"
                      label="Restaurant name"
                      placeholder="Pizza Palace"
                      ariaInvalid={!!form.formState.errors.name}
                    />
                    <FormFieldWithTypes
                      form={form}
                      type="number"
                      name="numberOfTables"
                      label="Number of tables"
                      placeholder="15"
                      minLength={1}
                      maxLength={25}
                      ariaInvalid={!!form.formState.errors.numberOfTables}
                    />
                  </div>
                  <FormFieldWithTypes
                    form={form}
                    type="textarea"
                    name="description"
                    label="Description"
                    placeholder="A cozy Italian restaurant known for its authentic wood-fired pizzas..."
                    maxLength={500}
                    ariaInvalid={!!form.formState.errors.description}
                  />
                  <div className="flex w-full gap-4">
                    <FormFieldWithTypes
                      form={form}
                      type="text"
                      name="founder"
                      label="Founder"
                      placeholder="John Doe"
                      ariaInvalid={!!form.formState.errors.founder}
                    />
                    <FormFieldWithTypes
                      form={form}
                      type="text"
                      name="administrator"
                      label="Administrator"
                      placeholder="Jane Smith"
                      ariaInvalid={!!form.formState.errors.administrator}
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <FormFieldWithTypes
                      form={form}
                      type="tel"
                      name="phone"
                      label="Phone number"
                      placeholder="+1 (555) 123-4567"
                      ariaInvalid={!!form.formState.errors.phone}
                    />
                    <FormFieldWithTypes
                      form={form}
                      type="text"
                      name="address"
                      label="Address"
                      placeholder="123 Main Street, City, Country"
                      ariaInvalid={!!form.formState.errors.address}
                    />
                  </div>
                  {isCreateMode ? (
                    <FormFieldWithTypes
                      form={form}
                      type="file"
                      name="menuCsv"
                      label="Menu CSV"
                      ariaInvalid={!!form.formState.errors.menuCsv}
                      accept=".csv"
                    />
                  ) : null}
                  <DialogFooter>
                    <Button
                      variant="outline"
                      type="button"
                      disabled={inPending}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={inPending}>
                      Save
                    </Button>
                  </DialogFooter>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const defaultValues = {
  name: "",
  description: "",
  founder: "",
  administrator: "",
  numberOfTables: 1,
  phone: "",
  address: "",
  menuCsv: undefined
};
