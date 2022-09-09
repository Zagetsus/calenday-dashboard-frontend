import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    padding: '0 10px 10xp'
  },
  title: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '29px',
    marginBottom: 6,

    color: '#282828'
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',

    color: '#656565'
  },
  employeeCardBox: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '27px',
    gap: '20px'
  }
});
