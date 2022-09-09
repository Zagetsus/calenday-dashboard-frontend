import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px'
  },
  header: {
    marginBottom: '12px'
  },
  title: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',

    color: '#263238'
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',

    color: '#656565'
  },
  averageTicketText: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '29px',

    color: '#282828'
  },
  text: {
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',

    color: '#282828'
  }
});
