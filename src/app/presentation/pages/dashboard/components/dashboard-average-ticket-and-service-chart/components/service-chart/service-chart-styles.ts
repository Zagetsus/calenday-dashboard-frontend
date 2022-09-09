import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '34.73px'
  },
  title: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',

    color: '#263238'
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',

    color: '#656565'
  },
  serviceBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4.21px'
  },
  serviceRow: {
    display: 'flex',
    gap: '14.74px'
  },
  serviceText: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    minWidth: '122px',

    color: '#656565'
  },
  serviceChart: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '29px',
    padding: '5.23px 9.5px 3.18px',
    color: theme.palette.background.default,
    '&.service-0': {
      width: '214px',
      backgroundColor: theme.palette.primary.main
    },
    '&.service-1': {
      width: '189px',
      backgroundColor: theme.palette.primary.light
    },
    '&.service-2, &.service-3, &.service-4': {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      backgroundColor: theme.palette.primary.light,
      opacity: '63%'
    },
    '&.service-2': {
      width: '134px'
    },
    '&.service-3': {
      width: '104px'
    },
    '&.service-4': {
      width: '79px'
    },
    '&.service-5': {
      width: '69px',
      backgroundColor: '#DCDEDF',
      color: '#282828'
    },
    '&.service-6': {
      width: '58px',
      backgroundColor: '#E9EAEA',
      color: '#282828'
    }
  }
});
