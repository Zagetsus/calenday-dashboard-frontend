import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export const mainSx = {
  flexGrow: 1,
  padding: '0 5rem',
  [theme.breakpoints.down('lg')]: {
    padding: '0 2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0'
  }
};

export default makeStyles({
  toolbar: {
    minHeight: '5rem'
  },
  main: {
    height: '100vh'
  }
});
