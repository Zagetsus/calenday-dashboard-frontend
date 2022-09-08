import { useRouter } from 'next/router';
import { UseFormProps, useForm } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';
import {
  Box,
  Button,
  InputTag,
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
  const { control, handleSubmit } = useForm<Authentication.Params>({
    ...validation,
    mode: 'onTouched'
  });

  const router = useRouter();
  const classes = makeStyles();

  function onSubmit(params: Authentication.Params) {
    authentication
      .signIn(params)
      .then(() => {
        router.push('/dashboard');
      })
      .catch(console.error);
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
    </Box>
  );
}

export default LoginComponent;
