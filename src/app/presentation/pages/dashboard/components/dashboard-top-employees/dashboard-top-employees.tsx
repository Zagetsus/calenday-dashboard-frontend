import { Box, Typography } from '~/app/presentation/components';
import { TopEmployeeCardTag } from '~/app/presentation/pages/dashboard/components/dashboard-top-employees/components';
import makeStyles from './dashboard-top-employees-styles';

function DashboardTopEmployeesComponents() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Box>
          <Typography className={classes.title}>Top 3 profissionais</Typography>
          <Typography className={classes.subtitle}>Agosto / 2022</Typography>
        </Box>

        <Box className={classes.employeeCardBox}>
          <TopEmployeeCardTag
            name='Mônica Soares'
            occupation={'Manicure'}
            totalAppointments={172}
          />
          <TopEmployeeCardTag
            name='Mônica Soares'
            occupation={'Manicure'}
            totalAppointments={172}
          />
          <TopEmployeeCardTag
            name='Mônica Soares'
            occupation={'Manicure'}
            totalAppointments={172}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardTopEmployeesComponents;
