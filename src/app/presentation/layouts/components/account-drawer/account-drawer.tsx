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
import makeStyles, { Drawer } from './account-drawer-styles';

function AccountDrawerComponent() {
  const classes = makeStyles();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const pages = [
    {
      name: 'Minha conta',
      icon: <Avatar className={classes.avatar}>L</Avatar>,
      url: '/dashboard'
    },
    {
      name: 'Dashboard',
      icon: <DashboardIcon fill='#fff' />,
      url: '/dashboard'
    },
    {
      name: 'Agendamentos',
      icon: <SchedulingIcon fill='#fff' />,
      url: '/scheduling'
    },
    {
      name: 'Estoque',
      icon: <InventoryIcon fill='#fff' />,
      url: '/inventary'
    },
    {
      name: 'Clientes',
      icon: <CustomerIcon fill='#fff' />,
      url: '/customers'
    },
    {
      name: 'Funcionários',
      icon: <EmployeesIcon fill='#fff' />,
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
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
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
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center'
              }}
            >
              <LogoutIcon fill={'#fff'} />
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
