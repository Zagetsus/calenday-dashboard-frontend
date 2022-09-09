import { Box } from '~/app/presentation/components';
import {
  DashboardGeneralAverageTag,
  DashboardHeadingTag,
  DashboardMainResumeTag,
  DashboardProductInfoTag,
  DashboardTopEmployeesTag
} from '~/app/presentation/pages/dashboard/components';
import makeStyles from './dashboard-styles';

function DashboardComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <DashboardHeadingTag>Dashboard</DashboardHeadingTag>
      <Box className={classes.wrapper}>
        <Box>
          <DashboardMainResumeTag
            totalCalls={380}
            date={'Agosto 2022'}
            averageTime={'01 h: 25'}
          />
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
    </Box>
  );
}

export default DashboardComponent;
