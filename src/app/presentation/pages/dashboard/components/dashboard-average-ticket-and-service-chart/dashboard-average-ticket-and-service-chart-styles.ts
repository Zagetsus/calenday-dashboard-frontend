import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    gap: 24,
    margin: '41px 0 62px',
    '& > div': {
      minWidth: '282px'
    }
  }
});
