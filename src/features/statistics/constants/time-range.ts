export const TIME_RANGE = {
  last7d: 7,
  last30d: 30,
  last90d: 90
} as const;

export type TimeRangeData = keyof typeof TIME_RANGE;
