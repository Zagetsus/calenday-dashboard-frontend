import { Box } from '~/app/presentation/components';
import {
  AverageTicketTag,
  ServiceChartTag
} from '~/app/presentation/pages/dashboard/components/dashboard-average-ticket-and-service-chart/components';
import makeStyles from './dashboard-average-ticket-and-service-chart-styles';

function dashboardAverageTicketAndServiceChartComponent() {
  const classes = makeStyles();

  const services = [
    { service: 'Manicure', amount: 182 },
    { service: 'Corte Feminino', amount: 118 },
    { service: 'Coloração', amount: 15 },
    { service: 'Luzes', amount: 10 },
    { service: 'Hidratação', amount: 8 },
    { service: 'Escova', amount: 5 },
    { service: 'Corte Masculino', amount: 3 }
  ];

  return (
    <Box className={classes.container}>
      <Box>
        <AverageTicketTag
          date={'Agosto / 2022'}
          averageTicket={'R$ 120,00'}
          outputs={'R$ - 25.356,00'}
          entries={'R$ 57.250,53'}
        />
      </Box>
      <Box>
        <ServiceChartTag date={'Agosto / 2022'} services={services} />
      </Box>
    </Box>
  );
}

export default dashboardAverageTicketAndServiceChartComponent;
