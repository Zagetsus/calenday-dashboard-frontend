import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './table-row-styles';

function TableRowComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Typography className={`${classes.text} name`}>Marina Cliente</Typography>
      <Typography className={`${classes.text} hour`}>11:00m</Typography>
      <Typography className={`${classes.text} phone`}>
        +55 11 9 5555-4444
      </Typography>
      <Typography className={`${classes.text} service`}>
        Corte Feminino
      </Typography>
      <Typography className={`${classes.text} price`}>R$ 150,00</Typography>
    </Box>
  );
}

export default TableRowComponent;
