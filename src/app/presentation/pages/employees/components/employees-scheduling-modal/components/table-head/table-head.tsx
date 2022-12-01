import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './table-head-styles';

function TableHeadComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Typography className={`${classes.title} name`}>
          Nome Cliente
        </Typography>
        <Typography className={`${classes.title} hour`}>Horário</Typography>
        <Typography className={`${classes.title} phone`}>Celular</Typography>
        <Typography className={`${classes.title} service`}>Serviço</Typography>
        <Typography className={`${classes.title} price`}>Preço</Typography>
      </Box>
    </Box>
  );
}

export default TableHeadComponent;
