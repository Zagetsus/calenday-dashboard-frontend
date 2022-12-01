import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container: {
    position: 'relative',
    padding: '40px 0px',
    backgroundColor: theme.palette.background.default,
    outline: 0,
    width: '714px',
    height: '100%',
    overflowY: 'auto'
  },
  closed: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '36px',
    right: '40px',
    cursor: 'pointer'
  },
  wrapper: {
    margin: '0 40px 0 64px'
  },
  title: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '125%',
    color: theme.palette.primary.main
  }
});
