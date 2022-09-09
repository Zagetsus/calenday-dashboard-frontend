import { Box, Typography } from '~/app/presentation/components';
import { DashboardProductInfoProps } from '~/app/presentation/pages/dashboard/components/interfaces';
import makeStyles from './dashboard-product-info-styles';

function DashboardProductInfoComponent({
  productTotal,
  stockTotal,
  sold
}: DashboardProductInfoProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.primaryText}>
        <span>{productTotal}</span> produtos cadastrados
      </Typography>
      <Typography className={classes.text}>
        {stockTotal} itens no estoque
      </Typography>
      <Typography className={classes.text}>{sold} vendidos</Typography>
    </Box>
  );
}

export default DashboardProductInfoComponent;
