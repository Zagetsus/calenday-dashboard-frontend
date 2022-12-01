import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { LoadingAnimationTag } from '~/app/presentation/assets/animations';
import { Box, Typography } from '~/app/presentation/components';
import { BaseLayout } from '~/app/presentation/layouts';
import makeStyles from './loading-styles';

function LoadingComponent() {
  const [show, setShow] = useState(false);

  const classes = makeStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimationTag
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setShow(true));
    Router.events.on('routeChangeComplete', () => setShow(false));
    Router.events.on('routeChangeError', () => setShow(false));
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    }
    if (!show) {
      document.body.style.overflowY = 'auto';
      document.body.style.touchAction = 'initial';
    }
  }, [show]);

  return (
    <>
      {show && (
        <Box className={classes.main}>
          <BaseLayout>
            <Box className={classes.container}>
              <Box className='lottie-box'>
                <Lottie options={defaultOptions} />
              </Box>
              <Typography>Carregando</Typography>
            </Box>
          </BaseLayout>
        </Box>
      )}
    </>
  );
}

export default LoadingComponent;
