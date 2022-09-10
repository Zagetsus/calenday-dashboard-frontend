import { Box, Typography } from '~/app/presentation/components';
import {
  EmployeesDashboardTag,
  EmployeesTableTag
} from '~/app/presentation/pages/employees/components';
import makeStyles from './employees-styles';

function EmployeesComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Funcionários</Typography>

      <EmployeesDashboardTag
        managers={1}
        hairdressers={15}
        manicures={25}
        others={3}
      />

      <EmployeesTableTag />
    </Box>
  );
}

export default EmployeesComponent;
