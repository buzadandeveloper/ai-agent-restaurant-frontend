export type Period = {
  startDate?: string;
  endDate?: string;
};

type RestaurantDailyStatistic = {
  date: string;
  ordersCount: number;
  totalRevenue: number;
  currency: string;
  averageOrderValue: number;
};

export type RestaurantStatisticsData = {
  restaurantId: number;
  restaurantName: string;
  period: Period;
  dailyData: RestaurantDailyStatistic[];
};
