import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '29px'
  },
  headingBox: {
    marginBottom: '12px'
  },
  title: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    marginBottom: 8,

    color: '#263238'
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',

    color: '#656565'
  },
  value: {
    fontSize: '24px',
    lineHeight: '29px',
    color: '#282828',

    '& span': {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',

      color: '#656565'
    }
  }
});
