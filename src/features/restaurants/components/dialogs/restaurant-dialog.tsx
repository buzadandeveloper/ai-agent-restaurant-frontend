import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateRestaurant, useUpdateRestaurant } from "@/features/restaurants/hooks";
import { restaurantDialogSchema } from "@/features/restaurants/schemas/restaurant-dialog.schemas";
import type { RestaurantDialogData } from "@/features/restaurants/types/index.types";
import type { RestaurantData } from "@/services/restaurants/restaurants.types";

interface RestaurantDialogProps {
  isDialogOpen: RestaurantDialogData;
  setIsDialogOpen: Dispatch<SetStateAction<RestaurantDialogData>>;
}

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

export const RestaurantDialog = ({ isDialogOpen, setIsDialogOpen }: RestaurantDialogProps) => {
  const form = useForm<RestaurantData>({
    resolver: zodResolver(restaurantDialogSchema),
    defaultValues
  });

  const { mutate: createRestaurant, isPending: createRestaurantPending } = useCreateRestaurant();
  const { mutate: updateRestaurant, isPending: updateRestaurantPending } = useUpdateRestaurant();

  const modalData = isDialogOpen.data;
  const isCreateMode = isDialogOpen.mode === "create";
  const inPending = createRestaurantPending || updateRestaurantPending;

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
    formData.append("menuCsv", data.menuCsv);

    if (isCreateMode) {
      createRestaurant(formData, {
        onSuccess: () => {
          handleClose();
        }
      });
    } else {
      const restaurantId = modalData?.id;
      if (!restaurantId) return;

      updateRestaurant(
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
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Restaurant name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Pizza Palace"
                              aria-invalid={!!form.formState.errors.name}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="numberOfTables"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Number of tables</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="15"
                              min={1}
                              max={25}
                              aria-invalid={!!form.formState.errors.numberOfTables}
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="A cozy Italian restaurant known for its authentic wood-fired pizzas..."
                            maxLength={500}
                            aria-invalid={!!form.formState.errors.description}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full gap-4">
                    <FormField
                      control={form.control}
                      name="founder"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Founder</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              aria-invalid={!!form.formState.errors.founder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="administrator"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Administrator</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane Smith"
                              aria-invalid={!!form.formState.errors.administrator}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              aria-invalid={!!form.formState.errors.phone}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 Main Street, City, Country"
                              aria-invalid={!!form.formState.errors.address}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="menuCsv"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Menu file</FormLabel>
                        <FormControl>
                          <Input
                            type={"file"}
                            accept=".csv"
                            aria-invalid={!!form.formState.errors.menuCsv}
                            onChange={(e) => onChange(e.target.files?.[0] || null)}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
