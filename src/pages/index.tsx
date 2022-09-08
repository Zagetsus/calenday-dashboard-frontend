import { makeLogin } from '~/app/main/factories/pages/login/login-factory';
import { DefaultLayout } from '~/app/presentation/layouts';
import handleSSRGuest from '~/pages/_handles/handle-ssr-guest';

export const getServerSideProps = handleSSRGuest(async () => {
  return {
    props: {}
  };
});

function Login() {
  return <DefaultLayout>{makeLogin()}</DefaultLayout>;
}

export default Login;
