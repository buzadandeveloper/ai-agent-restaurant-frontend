export interface ToastData {
  title: string;
  description: string;
  variant: "default" | "destructive";
}

export type RestaurantData = {
  id?: number;
  name: string;
  description: string;
  founder: string;
  administrator: string;
  numberOfTables: number;
  phone: string;
  address: string;
  configKey?: string;
  ownerId?: number;
  createdAt?: string;
  updatedAt?: string;
  menuCsv: File | null | undefined;
};
