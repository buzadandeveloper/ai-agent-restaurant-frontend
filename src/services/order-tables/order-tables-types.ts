export type Table = {
  id: number;
  tableNumber: number;
  restaurantId: number;
  isOccupied: boolean;
  activeOrdersCount: number;
  createdAt: string;
  updatedAt: string;
};

export type RestaurantTablesResponse = {
  restaurantName: string;
  tables: Table[];
};
