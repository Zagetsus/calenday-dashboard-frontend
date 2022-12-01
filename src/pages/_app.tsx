import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { LoadingTag } from '~/app/presentation/components';
import { ThemeProvider } from '~/app/presentation/components/mui/theme';
import theme from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <LoadingTag />
    </ThemeProvider>
  );
}

export default MyApp;
