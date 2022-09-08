import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4.5rem 0 6.688rem'
  },
  wrapper: {
    width: '100%',
    maxWidth: '22.5rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '0 1.5rem'
    }
  },
  loginHeading: {
    marginBottom: '48px'
  },
  title: {
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
    marginBottom: '12px',

    color: theme.palette.primary.main
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1rem',

    color: theme.palette.text.primary
  },
  inputBox: {
    '&:not(:last-child)': {
      marginBottom: '1.5rem'
    }
  },
  buttonBox: {
    marginTop: '2.25rem'
  }
});
