import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    '& button': {
      width: '282px'
    }
  },
  title: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',

    color: '#000000'
  }
});
