import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 80.75,
    marginTop: 80.6
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > p ': {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      marginBottom: 34,

      color: '#000000'
    }
  }
});
