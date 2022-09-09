import { useRouter } from 'next/router';
import { useState } from 'react';
import { UseFormProps, useForm } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';
import {
  Alert,
  Box,
  Button,
  InputTag,
  Snackbar,
  Typography
} from '~/app/presentation/components';
import Email from '~/app/presentation/components/icons/email/email';
import theme from '~/styles/theme';
import makeStyles from './login-styles';

type LoginComponentProps = {
  validation: UseFormProps<Authentication.Params>;
  authentication: Authentication;
};

function LoginComponent({ validation, authentication }: LoginComponentProps) {
  const [snackbar, setSnackbar] = useState(false);

  const { control, handleSubmit } = useForm<Authentication.Params>({
    ...validation,
    mode: 'onTouched'
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  const router = useRouter();
  const classes = makeStyles();

  function onSubmit(params: Authentication.Params) {
    authentication
      .signIn(params)
      .then(() => {
        router.push('/dashboard');
      })
      .catch(() => setSnackbar(true));
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes.loginHeading}>
          <Typography className={classes.title}>Entrar</Typography>
          <Typography className={classes.subtitle}>
            O gerenciador do seu salão
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.inputBox}>
            <InputTag
              name={'email'}
              control={control}
              title={'E-mail'}
              placeholder='Insira seu endereço de e-mail'
              startIcon={<Email fill={theme.palette.primary.main} />}
            />
          </Box>
          <Box className={classes.inputBox}>
            <InputTag
              name={'password'}
              control={control}
              title={'Senha'}
              placeholder='Insira sua senha'
              type='password'
            />
          </Box>
          <Box className={classes.buttonBox}>
            <Button type='submit' fullWidth variant={'contained'}>
              Entrar
            </Button>
          </Box>
        </form>
      </Box>

      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity='error'
          sx={{ width: '100%' }}
        >
          Email e/ou senha incorretos!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LoginComponent;
