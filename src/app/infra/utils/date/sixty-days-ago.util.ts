import { subDays } from './sub-days.util';

type SixtyDaysAgoProps = {
  date: Date;
};

export const sixtyDaysAgo = ({ date }: SixtyDaysAgoProps) => {
  return subDays(date, 60);
};
