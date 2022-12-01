import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 5rem)',
    '& .lottie-box': {
      width: '294px',
      marginBottom: '14px'
    },
    '& .title': {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      textAlign: 'center',
      color: theme.palette.text.primary,
      marginBottom: '16px'
    },
    '& .text': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }
});
