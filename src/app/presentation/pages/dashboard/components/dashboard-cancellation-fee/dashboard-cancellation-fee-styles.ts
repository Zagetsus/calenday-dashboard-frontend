import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  cancellationFeeTitle: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '18px',

    color: '#282828',
    '& > strong': {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '22px'
    }
  },
  cancellationFeeLegend: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19px',

    color: '#656565'
  }
});
