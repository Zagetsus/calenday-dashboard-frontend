import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './dashboard-cancellation-fee-styles';

function DashboardCancellationFeeComponent() {
  const classes = makeStyles();

  return (
    <Box>
      <Typography className={classes.cancellationFeeTitle}>
        <strong>10%</strong> taxa de cancelamento
      </Typography>
      <Typography className={classes.cancellationFeeLegend}>
        Procedimentos cancelados no mês
      </Typography>
    </Box>
  );
}

export default DashboardCancellationFeeComponent;
