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

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  isAvailable: boolean;
  categoryId: number;
  restaurantId: number;
};

type OrderItem = {
  id: number;
  menuItemId: number;
  quantity: number;
  price: number;
  menuItem: MenuItem;
  createdAt: string;
  updatedAt: string;
};

type Order = {
  id: number;
  tableId: number;
  total: number;
  currency: string;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
};

export type TableWithOrders = {
  id: number;
  tableNumber: number;
  restaurantId: number;
  orders: Order[];
  createdAt: string;
  updatedAt: string;
};
