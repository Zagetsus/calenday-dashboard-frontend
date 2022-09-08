import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'grid',
    gridTemplateRows: 'repeat(21, 64px)',
    gap: '14px',
    width: '180px',
    background: '#F8F8F8',
    border: '1px solid #EEEEEE',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    padding: '7px 4px'
  }
});
