import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  name: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'right',

    color: theme.palette.primary.main
  },
  occupation: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'right',

    color: theme.palette.text.primary
  }
});
