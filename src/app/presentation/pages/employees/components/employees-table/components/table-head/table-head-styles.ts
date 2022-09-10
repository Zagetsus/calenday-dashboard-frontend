import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '47px',
    backgroundColor: '#EFEFEF',
    '& > p': {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',

      color: '#282828'
    },
    '& .name': {
      minWidth: '150px'
    },
    '& .create-at': {
      minWidth: '92px'
    },
    '& .phone': {
      minWidth: '126px'
    },
    '& .email': {
      minWidth: '221px'
    },
    '& .services': {
      minWidth: '169px'
    },
    '& .actions': {
      minWidth: '72px'
    }
  }
});
