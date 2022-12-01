import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#FBFBFB',
    overflowY: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 5rem)',
    '& .lottie-box': {
      width: '120px'
    },
    '& .title': {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }
});
