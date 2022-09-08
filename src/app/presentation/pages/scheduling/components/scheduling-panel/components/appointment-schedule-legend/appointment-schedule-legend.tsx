import { DateUtils } from '~/app/infra/utils';
import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './appointment-schedule-legend-styles';

function AppointmentScheduleLegendComponents() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      {DateUtils.AvailableAppointmentHours.map((item, key) => (
        <Box key={key} className={classes.column}>
          <Typography className={classes.text}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default AppointmentScheduleLegendComponents;
