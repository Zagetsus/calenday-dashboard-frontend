import {
  AppBar,
  Badge,
  Box,
  SearchInputTag
} from '~/app/presentation/components';
import { BellIcon } from '~/app/presentation/components/icons';
import { AccountMenuTag } from '~/app/presentation/layouts/components';
import makeStyles from './header-styles';

function HeaderComponent() {
  const classes = makeStyles();

  return (
    <AppBar
      position='fixed'
      elevation={1}
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      className={classes.appBar}
      component={'header'}
    >
      <Box className={classes.appBarContentWrap}>
        <Box className={classes.searchInput}>
          <SearchInputTag placeholder='Pesquise por clientes' />
        </Box>
        <Box className={classes.accountRow}>
          <Badge badgeContent={4} color='primary'>
            <BellIcon />
          </Badge>

          <AccountMenuTag />
        </Box>
      </Box>
    </AppBar>
  );
}

export default HeaderComponent;
