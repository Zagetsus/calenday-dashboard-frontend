import { Box } from '~/app/presentation/components';
import {
  SchedulingColumnTag,
  AppointmentScheduleLegendsTag
} from '~/app/presentation/pages/scheduling/components/scheduling-panel/components';
import makeStyles from './scheduling-panel-styles';

function SchedulingPanelComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <AppointmentScheduleLegendsTag />

      <SchedulingColumnTag />
      <SchedulingColumnTag />
      <SchedulingColumnTag />
      <SchedulingColumnTag />
      <SchedulingColumnTag />
    </Box>
  );
}

export default SchedulingPanelComponent;
