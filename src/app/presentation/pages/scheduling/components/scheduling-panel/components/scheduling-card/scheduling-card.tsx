import { DateUtils } from '~/app/infra/utils';
import { Box, Typography } from '~/app/presentation/components';
import { SchedulingCardProps } from '~/app/presentation/pages/scheduling/components/scheduling-panel/interface';
import makeStyles from './scheduling-card-styles';

function SchedulingCardComponent({ data }: SchedulingCardProps) {
  const { customer, service, start, end } = data;
  const classes = makeStyles();

  const gridStart = DateUtils.AvailableAppointmentHours.findIndex(
    item => item === start
  );

  const gridEnd = DateUtils.AvailableAppointmentHours.findIndex(
    item => item === end
  );

  return (
    <Box
      style={{ gridRowStart: gridStart + 1, gridRowEnd: gridEnd + 1 }}
      className={classes.container}
    >
      <Typography className={classes.title}>{service}</Typography>
      <Box className={classes.row}>
        <Typography className={'title'}>Cliente</Typography>
        <Typography className={'subtitle'}>{customer}</Typography>
      </Box>
      <Typography className={classes.hour}>{start}</Typography>
    </Box>
  );
}

export default SchedulingCardComponent;
