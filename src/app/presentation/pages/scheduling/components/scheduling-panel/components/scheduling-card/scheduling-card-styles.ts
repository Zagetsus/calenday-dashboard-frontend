import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    width: '100%',
    padding: '4px 10px',
    backgroundColor: '#DEF2D9'
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '11px',
    letterSpacing: '0.01em',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    color: theme.palette.primary.main
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '5.3px 0',
    gap: '5.3px',
    '& .title': {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '19px',
      letterSpacing: '-0.01em',

      color: '#000000'
    },
    '& .subtitle': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19px',
      letterSpacing: '-0.01em',

      color: '#000000'
    }
  },
  hour: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '11px',
    letterSpacing: '-0.01em',
    textDecorationLine: 'underline',
    color: '#000000'
  }
});
