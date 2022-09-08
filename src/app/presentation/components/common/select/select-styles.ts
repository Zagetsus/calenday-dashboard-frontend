import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    width: '100%'
  },
  selectBox: {
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.188rem',
    letterSpacing: '0.0015em',
    color: theme.palette.text.primary,
    marginBottom: '8px'
  },
  helperText: {
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '0.938rem',
    letterSpacing: '0.0015em',
    marginTop: '0.375rem',
    height: '0.938rem',
    color: theme.palette.text.secondary
  }
});
