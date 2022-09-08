import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    height: '85vh',

    background: theme.palette.background.default,
    borderTopLeftRadius: '32px',
    padding: '45px 16px'
  },
  title: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    marginBottom: '48px',

    color: theme.palette.primary.main
  }
});
