import { Drawer as MuiDrawer } from '~/app/presentation/components/mui';
import {
  ThemeProps,
  CssObjectProps
} from '~/app/presentation/components/mui/interfaces';
import { makeStyles, styled } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme';

const drawerWidth = 240;

export const openedMixin = (theme: ThemeProps): CssObjectProps => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

export const closedMixin = (theme: ThemeProps): CssObjectProps => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  [theme.breakpoints.up('sm')]: {
    width: '2.5rem'
  },
  [theme.breakpoints.up('lg')]: {
    width: '5rem',
    padding: '24px 10px'
  }
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiPaper-root': {
    padding: '24px 0',
    height: '100vh',
    background: theme.palette.primary.main
  },
  [theme.breakpoints.down('lg')]: {
    '& .MuiPaper-root': {
      padding: '24px 0'
    }
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  avatar: {
    [theme.breakpoints.down('lg')]: {
      width: '1.75rem',
      height: '1.75rem'
    }
  },
  toolbar: {
    height: '95px'
  }
});
