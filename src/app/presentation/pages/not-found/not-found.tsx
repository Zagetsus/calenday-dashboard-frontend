import Lottie from 'react-lottie';
import { PageNotFound } from '~/app/presentation/assets/animations';
import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './not-found-styles';

function NotFoundComponent() {
  const classes = makeStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound
  };

  return (
    <Box className={classes.container}>
      <Box className='lottie-box'>
        <Lottie options={defaultOptions} />
      </Box>
      <Typography className='title'>Ops! Página não encontrada</Typography>
      <Typography className='text'>
        Que pena!
        <br />
        Parece que não encontramos a página que você queria.
        <br />
        Pedimos desculpas por isso.
      </Typography>
    </Box>
  );
}

export default NotFoundComponent;
