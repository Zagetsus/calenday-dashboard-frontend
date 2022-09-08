import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '4.25rem'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .title': {
      fontWeight: 400,
      fontSize: '36px',
      lineHeight: '44px',
      marginBottom: '1rem',

      color: '#000000',

      '&.primary': {
        color: theme.palette.primary.main
      }
    },
    '& .text': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',

      color: '#656565'
    }
  }
});
