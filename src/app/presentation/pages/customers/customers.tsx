import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './customers-styles';

function EmployeesComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Clientes</Typography>
    </Box>
  );
}

export default EmployeesComponent;
