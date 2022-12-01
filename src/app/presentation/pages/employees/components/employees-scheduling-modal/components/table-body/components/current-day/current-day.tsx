import { Box, Divider, Typography } from '~/app/presentation/components';
import makeStyles from './current-day-styles';

function CurrentDayComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Typography className={classes.name}>Leia Ferreira</Typography>
        <Typography className={classes.occupation}>Cabeleireira</Typography>
      </Box>
      <Divider style={{ flex: 1 }} />
      <Box>
        <Typography className={classes.date}>03/09/2022</Typography>
      </Box>
    </Box>
  );
}

export default CurrentDayComponent;
