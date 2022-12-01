import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '28px'
  },
  text: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.text.secondary,
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
