import { Box, Typography } from '~/app/presentation/components';
import { ServiceChartProps } from '~/app/presentation/pages/dashboard/components/dashboard-average-ticket-and-service-chart/components/interfaces';
import makeStyles from './service-chart-styles';

function ServiceChartComponent({ date, services }: ServiceChartProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.title} component={'h3'}>
          Serviços realizados
        </Typography>
        <Typography className={classes.subtitle}>{date}</Typography>
      </Box>

      <Box className={classes.serviceBox}>
        {services.map((item, key) => (
          <Box className={classes.serviceRow} key={key}>
            <Typography className={classes.serviceText}>
              {item.service}
            </Typography>

            <Box className={`${classes.serviceChart} service-${key}`}>
              <Typography>{item.amount}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ServiceChartComponent;
