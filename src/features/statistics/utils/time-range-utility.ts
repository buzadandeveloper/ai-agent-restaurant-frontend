import dayjs from "@lib/dayjs";
import { TIME_RANGE, type TimeRangeData } from "../constants/index";

export const createTimeRange = (days: number) => ({
  startDate: dayjs()
    .subtract(days - 1, "day")
    .startOf("day")
    .toISOString(),
  endDate: dayjs().endOf("day").toISOString()
});

export const getTimeRange = (range: TimeRangeData) => createTimeRange(TIME_RANGE[range]);
