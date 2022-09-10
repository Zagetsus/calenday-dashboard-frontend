import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './inventory-styles';

function InventoryComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Estoque</Typography>
    </Box>
  );
}

export default InventoryComponent;
