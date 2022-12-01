import { Box, Typography } from '~/app/presentation/components';
import { InventoryHeadingTag } from '~/app/presentation/pages/inventory/components';
import makeStyles from './inventory-styles';

function InventoryComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <InventoryHeadingTag />
    </Box>
  );
}

export default InventoryComponent;
