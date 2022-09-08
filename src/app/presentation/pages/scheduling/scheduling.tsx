import { useState } from 'react';
import { Box, Typography } from '~/app/presentation/components';
import {
  SchedulingCreateModalTag,
  SchedulingDashboardTag,
  SchedulingPanelTag,
  SideFlapTag,
  TitleTag
} from '~/app/presentation/pages/scheduling/components';
import makeStyles from './scheduling-styles';

function SchedulingComponent() {
  const [createModal, setCreateModal] = useState(false);
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <TitleTag>Agendamentos</TitleTag>

      <SchedulingDashboardTag
        handleOpenCreateModal={() => setCreateModal(!createModal)}
      />

      <SchedulingPanelTag />

      <SchedulingCreateModalTag
        open={createModal}
        handleClose={() => setCreateModal(!createModal)}
      />

      <SideFlapTag />
    </Box>
  );
}

export default SchedulingComponent;
