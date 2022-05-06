import dayjs from "dayjs";

export function FormatMemberTime(date: Date | string) {
  return dayjs(date).format("[Member since] YYYY");
}
