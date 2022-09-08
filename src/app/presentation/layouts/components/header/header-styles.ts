import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  appBar: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '5rem'
  },
  appBarContentWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '79.813rem',
    height: '100%',
    margin: '0 auto',
    '& .web': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '38.75rem'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '0 24px'
    }
  },
  searchInput: {
    width: '100%',
    maxWidth: '324px'
  },
  accountRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }
});
