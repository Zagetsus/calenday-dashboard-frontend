import { useRouter } from 'next/router';
import React from 'react';
import {
  CustomerIcon,
  DashboardIcon,
  SchedulingIcon,
  InventoryIcon,
  EmployeesIcon,
  LogoutIcon
} from '~/app/presentation/components/icons';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '~/app/presentation/components/mui';
import theme from '~/styles/theme';
import makeStyles, { Drawer, ListItemButtonSx } from './account-drawer-styles';

function AccountDrawerComponent() {
  const classes = makeStyles();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const pages = [
    {
      name: 'Minha conta',
      icon: <Avatar className={classes.avatar}>L</Avatar>,
      url: '/minha-conta'
    },
    {
      name: 'Dashboard',
      icon: (
        <DashboardIcon
          fill={router.pathname === '/dashboard' ? '#FFFFFF' : '#919191'}
        />
      ),
      url: '/dashboard'
    },
    {
      name: 'Agendamentos',
      icon: (
        <SchedulingIcon
          fill={router.pathname === '/scheduling' ? '#FFFFFF' : '#919191'}
        />
      ),
      url: '/scheduling'
    },
    {
      name: 'Estoque',
      icon: (
        <InventoryIcon
          fill={router.pathname === '/inventary' ? '#FFFFFF' : '#919191'}
        />
      ),
      url: '/inventary'
    },
    {
      name: 'Clientes',
      icon: (
        <CustomerIcon
          fill={router.pathname === '/customers' ? '#FFFFFF' : '#919191'}
        />
      ),
      url: '/customers'
    },
    {
      name: 'Funcionários',
      icon: (
        <EmployeesIcon
          fill={router.pathname === '/employees' ? '#FFFFFF' : '#919191'}
        />
      ),
      url: '/employees'
    }
  ];

  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar className={classes.toolbar} />
      <List className={classes.list}>
        {pages.map(item => (
          <ListItem key={`nav-${item.name}`} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.url)}
              sx={{
                ...ListItemButtonSx,
                justifyContent: open ? 'initial' : 'center',
                backgroundColor:
                  router.pathname === item.url
                    ? theme.palette.primary.main
                    : 'transparent',

                '&:hover': {
                  backgroundColor:
                    router.pathname === item.url
                      ? theme.palette.primary.main
                      : 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              ...ListItemButtonSx,
              justifyContent: open ? 'initial' : 'center'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center'
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary='Sair da conta'
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AccountDrawerComponent;
