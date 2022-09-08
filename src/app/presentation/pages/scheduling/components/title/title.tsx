import { Box, Typography } from '~/app/presentation/components';
import { TitleProps } from '~/app/presentation/pages/scheduling/interfaces/title-props.interface';
import makeStyles from './title-styles';

function TitleComponent({ children }: TitleProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{children}</Typography>
    </Box>
  );
}

export default TitleComponent;
