import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    gap: 24,
    '& > div': {
      minWidth: '283px'
    }
  },
  callsText: {
    fontSize: '20px',
    lineHeight: '24px',
    marginBottom: 8,

    color: '#282828',
    '& strong': {
      fontWeight: 400,
      fontSize: '36px',
      lineHeight: '44px'
    }
  },
  dateText: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',

    color: '#656565'
  },
  title: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    marginBottom: 8,
    color: '#263238'
  },
  averageTime: {
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '44px',
    color: '#282828',

    '& span': {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '29px',
      color: ''
    }
  }
});
