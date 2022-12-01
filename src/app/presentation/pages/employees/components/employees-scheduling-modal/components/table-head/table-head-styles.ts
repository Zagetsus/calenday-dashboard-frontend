import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow:
      '0rem 0.25rem 0.1875rem rgba(143, 143, 143, 0.25), 0px 0.0625rem 0px rgba(0, 0, 0, 0.15)',
    marginBottom: '36px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '40px',
    margin: '0 40px 0 64px',
    width: '100%'
  },
  title: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.text.primary,
    '&.name': {
      minWidth: '105px'
    },
    '&.hour': {
      minWidth: '85px'
    },
    '&.phone': {
      minWidth: '126px'
    },
    '&.service': {
      minWidth: '103px'
    },
    '&.price': {
      minWidth: '65px'
    }
  }
});
