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
    padding: '40px 49px',
    backgroundColor: theme.palette.background.default,
    outline: 0,
    width: '596px',
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
  title: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '125%',
    color: theme.palette.primary.main,
    marginBottom: '42px'
  },
  subtitle: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '125%',
    color: theme.palette.grey['900'],
    marginBottom: '24px'
  },
  formBox: {
    marginTop: '24px'
  },
  formRow: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px',
    '& div': {
      flex: 1
    }
  }
});
