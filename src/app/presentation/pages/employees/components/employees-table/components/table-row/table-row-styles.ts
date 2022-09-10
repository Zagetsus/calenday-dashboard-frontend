import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '48px',
    borderBottom: '1px solid #DEDEDE',
    '& > p': {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',

      color: '#282828'
    },
    '& > .name': {
      minWidth: '150px'
    },
    '& > .create-at': {
      minWidth: '92px'
    },
    '& > .phone': {
      minWidth: '126px'
    },
    '& > .email': {
      minWidth: '221px'
    },
    '& > .services': {
      display: 'flex',
      alignItems: 'center',
      minWidth: '169px'
    },
    '& > .actions': {
      display: 'flex',
      alignItems: 'center',
      minWidth: '72px'
    }
  },
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    '& .name': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '17px',

      color: '#282828'
    },
    '& .occupation': {
      fontSize: '12px',
      lineHeight: '15px',

      color: '#515151'
    }
  },
  button: {
    fontSize: '14px !important'
  },
  rowText: {
    fontSize: '16px',
    lineHeight: '20px',

    color: '#515151'
  }
});
