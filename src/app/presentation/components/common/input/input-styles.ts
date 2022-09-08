import { InputBase } from '~/app/presentation/components/mui';
import { makeStyles, styled } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

export const Input = styled(InputBase)(({ theme, error }) => ({
  border: !error
    ? '1px solid #ced4da'
    : `2px solid ${theme.palette.error.main} !important`,
  borderRadius: 8,
  width: '100%',
  padding: '0rem 1rem',
  backgroundColor: theme.palette.background.default,
  marginTop: '0.5rem',
  '&.Mui-error': {
    '& svg': {
      '& *': {
        fill: theme.palette.error.main
      }
    }
  },
  '&.Mui-focused': {
    border: `2px solid ${theme.palette.primary.main}`
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    fontSize: 16,
    padding: '0rem',
    height: '3rem'
  }
}));

export default makeStyles({
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.188rem',
    letterSpacing: '0.0015em',
    color: theme.palette.text.primary
  },
  helperText: {
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '0.938rem',
    letterSpacing: '0.0015em',
    marginTop: '0.375rem',
    height: '0.938rem',
    color: theme.palette.text.secondary
  }
});
