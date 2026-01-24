export interface RestaurantData {
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
}

export interface RestaurantMenuItem {
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
}

export interface RestaurantResponse {
  message: string;
  restaurant: RestaurantData;
}

export interface RestaurantIdResponse {
  restaurantId: number;
  message: string;
}
