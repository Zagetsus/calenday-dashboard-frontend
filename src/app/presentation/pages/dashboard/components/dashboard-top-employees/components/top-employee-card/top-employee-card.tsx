import { Avatar, Box, Typography } from '~/app/presentation/components';
import { TopEmployeeCardProps } from '~/app/presentation/pages/dashboard/components/dashboard-top-employees/components/interfaces';
import makeStyles from './top-employee-card-styles';

function TopEmployeeCardComponent({
  name,
  occupation,
  totalAppointments
}: TopEmployeeCardProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Avatar className={classes.avatar} />
      </Box>

      <Box>
        <Box className={classes.header}>
          <Typography className={'name'}>{name}</Typography>
          <Typography className={'occupation'}>{occupation}</Typography>
        </Box>
        <Typography className={classes.text}>
          <strong>{totalAppointments}</strong> atendimentos realizados
        </Typography>
      </Box>
    </Box>
  );
}

export default TopEmployeeCardComponent;
