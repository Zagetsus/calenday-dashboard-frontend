import { createTheme } from '~/app/presentation/components/mui/theme';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 768,
      lg: 1285,
      xl: 1440
    }
  },
  palette: {
    primary: {
      main: '#0A4182',
      light: '#0A59B6',
      '400': '#009EFF',
      '600': '#0076B8',
      '700': '#006CA9',
      '900': '#004064'
    },
    secondary: {
      main: '#A0DF90',
      contrastText: '#749D6A',
      dark: '#036A13',
      '300': '#29E321',
      '500': '#08B700',
      '600': '#009F19'
    },
    text: {
      primary: '#353535',
      secondary: '#6D6D6D',
      disabled: '#B2B2B2'
    },
    background: {
      default: '#FFFFFF'
    },
    grey: {
      '100': '#FDFDFD',
      '200': '#F7F7F7',
      '300': '#F0F0F0',
      '500': '#CED4DA',
      '600': '#969696',
      '900': '#000000'
    },
    success: {
      dark: '#036A13',
      main: '#24CA5C',
      light: '#DBFFD2'
    },
    warning: {
      dark: '#937C04',
      main: '#FFDD28',
      light: '#FFF8B3'
    },
    error: {
      dark: '#D00000',
      main: '#EB6262',
      light: '#FFDFDF'
    }
  },
  typography: {
    fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif',
    body1: {
      fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif'
    },
    body2: {
      fontFamily: '"Cabin", "Helvetica", "Arial", sans-serif'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: '#FFFFFF',
          fontWeight: 500,
          lineHeight: '1.4rem',
          backgroundColor: '#0A4182',
          padding: '0.551rem 0.813rem',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.25rem',
          transition: 'none',
          '& svg': {
            fill: '#FFFFFF'
          },
          '&:hover': {
            backgroundColor: '#0A59B6',
            boxShadow: 'none'
          },
          '&:disabled': {
            backgroundColor: '#CECECE',
            color: '#969696',
            '& svg': {
              fill: '#969696'
            }
          },
          '&:focus-visible': {
            boxShadow: '0px 0px 0px 0.25rem #CFA2F6',
            borderRadius: '0.25rem'
          }
        }
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            fontSize: '1rem',
            color: '#0A4182',
            textDecoration: 'underline',
            backgroundColor: 'transparent',
            padding: '0rem',
            lineHeight: '1.25rem',
            fontWeight: 500,
            '&:hover': {
              color: '#0A59B6',
              textDecoration: 'underline',
              backgroundColor: 'transparent'
            },
            '&:disabled': {
              color: '#CECECE',
              textDecoration: 'none',
              backgroundColor: 'transparent'
            },
            '&:focus-visible': {
              border: '0.0625rem solid #3F0B6D',
              backgroundColor: 'transparent',
              borderRadius: '0.25rem',
              boxShadow: 'none'
            }
          }
        }
      ]
    }
  }
});

export default theme;
