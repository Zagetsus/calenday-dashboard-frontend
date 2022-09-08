import { Avatar, Box, Typography } from '~/app/presentation/components';
import makeStyles from './account-menu-styles';

function AccountMenuComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.name}>Luan Verdelho</Typography>
        <Typography className={classes.occupation}>Proprietário</Typography>
      </Box>
      <Avatar>L</Avatar>
    </Box>
  );
}

export default AccountMenuComponent;
