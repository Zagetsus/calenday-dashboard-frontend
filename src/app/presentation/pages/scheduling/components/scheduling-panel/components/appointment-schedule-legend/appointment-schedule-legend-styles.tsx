import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'grid',
    gridTemplateRows: 'repeat(21, 64px)',
    gap: '14px',
    padding: '7px 4px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  text: {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',

    textAlign: 'right',

    color: '#000000'
  }
});
