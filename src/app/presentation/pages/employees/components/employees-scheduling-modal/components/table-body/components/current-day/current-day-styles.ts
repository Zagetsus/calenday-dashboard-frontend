import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 24
  },
  name: {
    fontWeight: 700,
    fontSize: '14px',
    color: theme.palette.text.primary
  },
  occupation: {
    fontSize: '14px',
    color: theme.palette.text.secondary
  },
  date: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
    color: theme.palette.text.secondary
  }
});
