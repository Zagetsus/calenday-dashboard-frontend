import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  avatar: {
    width: '40px',
    height: '40px'
  },
  name: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  occupation: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#696969'
  }
});
