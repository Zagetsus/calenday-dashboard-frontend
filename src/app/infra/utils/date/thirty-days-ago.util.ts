import { subDays } from './sub-days.util';

type thirtyDaysAgoProps = {
  date: Date;
};

export const thirtyDaysAgo = ({ date }: thirtyDaysAgoProps) => {
  return subDays(date, 30);
};
