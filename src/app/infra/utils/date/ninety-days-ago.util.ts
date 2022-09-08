import { subDays } from 'date-fns';

type NinetyDaysAgoProps = {
  date: Date;
};

export const ninetyDaysAgo = ({ date }: NinetyDaysAgoProps) => {
  return subDays(date, 90);
};
