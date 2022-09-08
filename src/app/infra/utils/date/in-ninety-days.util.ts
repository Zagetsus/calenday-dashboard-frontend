import { addDays } from 'date-fns';

type InNinetyDaysProps = {
  date: Date;
};

export const inNinetyDays = ({ date }: InNinetyDaysProps) => {
  return addDays(date, 90);
};
