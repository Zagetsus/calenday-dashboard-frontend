import { Box, Typography } from '~/app/presentation/components';
import { DashboardGeneralAverageProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import makeStyles from './dashboard-general-average-styles';

function DashboardGeneralAverageComponent({
  productSales,
  appointmentsPerDay,
  callsPerDay
}: DashboardGeneralAverageProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Box className={classes.headingBox}>
          <Typography className={classes.title}>Vendas Produtos</Typography>
          <Typography className={classes.subtitle}>Agosto / 2022</Typography>
        </Box>
        <Typography className={classes.value}>{productSales}</Typography>
      </Box>
      <Box>
        <Box className={classes.headingBox}>
          <Typography className={classes.title}>
            Agendamentos por dia
          </Typography>
          <Typography className={classes.subtitle}>Agosto / 2022</Typography>
        </Box>
        <Typography className={classes.value}>
          {appointmentsPerDay}/ <span>dia</span>
        </Typography>
      </Box>
      <Box>
        <Box className={classes.headingBox}>
          <Typography className={classes.title}>
            Média atendimentos diários
          </Typography>
          <Typography className={classes.subtitle}>Agosto / 2022</Typography>
        </Box>
        <Typography className={classes.value}>
          {callsPerDay}/ <span>dia</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default DashboardGeneralAverageComponent;
