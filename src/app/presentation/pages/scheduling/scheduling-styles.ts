import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    marginRight: '290px',
    padding: '48px 24px 100px',
    [theme.breakpoints.up('xl')]: {
      margin: '0 auto',
      maxWidth: '1072px'
    }
  }
});
