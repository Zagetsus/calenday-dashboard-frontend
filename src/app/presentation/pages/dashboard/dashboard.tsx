import { useState } from 'react';
import { Box, SchedulingCreateModalTag } from '~/app/presentation/components';
import {
  DashboardAttendanceChartTag,
  DashboardAverageTicketAndServiceChartTag,
  DashboardCancellationFeeTag,
  DashboardGeneralAverageTag,
  DashboardHeadingTag,
  DashboardMainResumeTag,
  DashboardProductInfoTag,
  DashboardTopEmployeesTag
} from '~/app/presentation/pages/dashboard/components';
import makeStyles from './dashboard-styles';

function DashboardComponent() {
  const [createModal, setCreateModal] = useState(false);
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <DashboardHeadingTag handleOpenCreateModal={() => setCreateModal(true)}>
        Dashboard
      </DashboardHeadingTag>
      <Box className={classes.wrapper}>
        <Box>
          <DashboardMainResumeTag
            totalCalls={380}
            date={'Agosto 2022'}
            averageTime={'01 h: 25'}
          />

          <DashboardAverageTicketAndServiceChartTag />

          <DashboardAttendanceChartTag date={'Agosto/2022'} />

          <DashboardCancellationFeeTag />
        </Box>
        <Box>
          <DashboardTopEmployeesTag />
          <DashboardProductInfoTag
            productTotal={80}
            stockTotal={600}
            sold={200}
          />
          <DashboardGeneralAverageTag
            productSales={'R$ 16.250,64'}
            appointmentsPerDay={40}
            callsPerDay={50}
          />
        </Box>
      </Box>

      <SchedulingCreateModalTag
        open={createModal}
        handleClose={() => setCreateModal(false)}
      />
    </Box>
  );
}

export default DashboardComponent;
