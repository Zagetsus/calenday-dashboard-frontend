import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    maxWidth: '996px',
    margin: '0 auto',
    padding: ' 48px 0 100px'
  },
  wrapper: {
    display: 'flex',
    gap: '24px',
    '& > div': {
      flex: 1,
      '&:last-child': {
        maxWidth: '282px'
      }
    }
  }
});
