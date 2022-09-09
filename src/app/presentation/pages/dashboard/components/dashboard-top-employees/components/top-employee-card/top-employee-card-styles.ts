import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px'
  },
  avatar: {
    width: 40,
    height: 40
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    marginBottom: '7px',
    '& .name': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '17px',

      color: '#282828'
    },
    '& .occupation': {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px',

      color: theme.palette.primary.light
    }
  },
  text: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',

    color: '#515151',

    '& strong': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px'
    }
  }
});
