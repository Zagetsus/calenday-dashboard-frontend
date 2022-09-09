import { Box, Typography } from '~/app/presentation/components';
import { AverageTicketProps } from '~/app/presentation/pages/dashboard/components/dashboard-average-ticket-and-service-chart/components/interfaces';
import makeStyles from './average-ticket-styles';

function AverageTicketComponent({
  date,
  averageTicket,
  outputs,
  entries
}: AverageTicketProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Box className={classes.header}>
          <Typography component={'h3'} className={classes.title}>
            Ticket médio
          </Typography>
          <Typography className={classes.subtitle}>{date}</Typography>
        </Box>
        <Typography className={classes.averageTicketText}>
          {averageTicket} / Cliente
        </Typography>
      </Box>

      <Box>
        <Box className={classes.header}>
          <Typography component={'h3'} className={classes.title}>
            Saídas
          </Typography>
          <Typography className={classes.subtitle}>{date}</Typography>
        </Box>
        <Typography className={classes.text}>{outputs}</Typography>
      </Box>

      <Box>
        <Box className={classes.header}>
          <Typography component={'h3'} className={classes.title}>
            Entradas
          </Typography>
          <Typography className={classes.subtitle}>{date}</Typography>
        </Box>
        <Typography className={classes.text}>{entries}</Typography>
      </Box>
    </Box>
  );
}

export default AverageTicketComponent;
