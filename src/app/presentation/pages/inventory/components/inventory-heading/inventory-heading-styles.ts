import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '42px'
  },
  title: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',

    color: '#000000'
  },
  buttonBox: {
    display: 'flex',
    gap: '24px',

    '& > button': {
      width: '200px',
      height: '48px'
    }
  }
});
