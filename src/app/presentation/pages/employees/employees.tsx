import { useState } from 'react';
import { EmployeesProps } from '~/app/domain/protocols';
import { Box, Typography } from '~/app/presentation/components';
import {
  EmployeesDashboardTag,
  EmployeesModalTag,
  EmployeesSchedulingModalTag,
  EmployeesTableTag
} from '~/app/presentation/pages/employees/components';
import makeStyles from './employees-styles';

function EmployeesComponent({ employeesHttpResponse }: EmployeesProps) {
  const [employeeModal, setEmployeeModal] = useState(false);
  const [employeeSchedulingModal, setEmployeeSchedulingModal] = useState(false);
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Funcionários</Typography>

      <EmployeesDashboardTag
        managers={1}
        hairdressers={15}
        manicures={25}
        others={3}
        openModal={() => setEmployeeModal(true)}
      />

      <EmployeesTableTag
        employeesHttpResponse={employeesHttpResponse}
        openScheduling={() => setEmployeeSchedulingModal(true)}
      />

      <EmployeesModalTag
        open={employeeModal}
        handleClose={() => setEmployeeModal(false)}
      />

      <EmployeesSchedulingModalTag
        open={employeeSchedulingModal}
        handleClose={() => setEmployeeSchedulingModal(false)}
      />
    </Box>
  );
}

export default EmployeesComponent;
