import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    margin: '56px 0 24px',
    padding: '10px 10px 24px',
    borderTop: '1px solid #DEDEDE',
    borderBottom: '1px solid #DEDEDE'
  },
  primaryText: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#282828',

    '& span': {
      fontSize: '36px',
      lineHeight: '44px'
    }
  },
  text: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#656565'
  }
});
