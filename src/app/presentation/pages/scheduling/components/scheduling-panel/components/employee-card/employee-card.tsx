import { Avatar, Box, Typography } from '~/app/presentation/components';
import { EmployeeCardProps } from '~/app/presentation/pages/scheduling/components/scheduling-panel/interface';
import makeStyles from './employee-card-styles';

function EmployeeCardComponent({ name, occupation }: EmployeeCardProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Avatar className={classes.avatar} />
      <Box>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.occupation}>{occupation}</Typography>
      </Box>
    </Box>
  );
}

export default EmployeeCardComponent;
