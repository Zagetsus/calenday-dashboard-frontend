import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './table-head-styles';

function TableHeadComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className='name'>Nome/Função</Typography>
      <Typography className='create-at'>Desde de</Typography>
      <Typography className='phone'>Celular</Typography>
      <Typography className='email'>E-mail</Typography>
      <Typography className='services'>Serviços</Typography>
      <Typography className='actions'>Ações</Typography>
    </Box>
  );
}

export default TableHeadComponent;
