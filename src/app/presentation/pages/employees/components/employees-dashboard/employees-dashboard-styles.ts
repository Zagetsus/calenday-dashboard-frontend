import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 62,
    '& button': {
      width: 202
    },
    '& > .title': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',

      color: '#282828'
    }
  },
  content: {
    display: 'flex',
    gap: 48,
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      '& > .title': {
        fontSize: '36px',
        lineHeight: '44px',

        color: '#000000'
      },
      '& > .text': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '17px',

        color: '#656565'
      }
    }
  }
});
