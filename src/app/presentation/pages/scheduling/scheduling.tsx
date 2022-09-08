import { Box, Typography } from '~/app/presentation/components';
import {
  SchedulingDashboardTag,
  SchedulingPanelTag,
  SideFlapTag,
  TitleTag
} from '~/app/presentation/pages/scheduling/components';
import makeStyles from './scheduling-styles';

function SchedulingComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <TitleTag>Agendamentos</TitleTag>

      <SchedulingDashboardTag />

      <SchedulingPanelTag />

      <SideFlapTag />
    </Box>
  );
}

export default SchedulingComponent;
