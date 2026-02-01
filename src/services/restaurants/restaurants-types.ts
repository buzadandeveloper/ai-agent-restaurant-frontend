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

export type RestaurantMenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  isAvailable: boolean;
  tags: string[];
  allergens: string[];
  categoryId: number;
  categoryName: string;
};

export type RestaurantResponse = {
  message: string;
  restaurant: RestaurantData;
};

export type RestaurantIdResponse = {
  restaurantId: number;
  message: string;
};
