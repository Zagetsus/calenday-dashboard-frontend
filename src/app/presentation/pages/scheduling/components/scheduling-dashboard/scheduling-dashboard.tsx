import { Box, Button, Typography } from '~/app/presentation/components';
import makeStyles from './scheduling-dasboard-styles';

function SchedulingDashboardComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes.card}>
          <Typography className='title primary'>30 Março</Typography>
          <Typography className='text'>43 AGENDAMENTOS</Typography>
        </Box>
        <Box className={classes.card}>
          <Typography className='title'>15</Typography>
          <Typography className='text'>CONFIRMADOS</Typography>
        </Box>
        <Box className={classes.card}>
          <Typography className='title'>25</Typography>
          <Typography className='text'>PENDENTES</Typography>
        </Box>
        <Box className={classes.card}>
          <Typography className='title'>3</Typography>
          <Typography className='text'>CANCELADOS</Typography>
        </Box>
        <Box>
          <Button variant='contained'>Novo agendamento</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SchedulingDashboardComponent;
