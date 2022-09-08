import { Box } from '~/app/presentation/components';
import {
  EmployeeCardTag,
  SchedulingContainerCardsTags
} from '~/app/presentation/pages/scheduling/components/scheduling-panel/components';
import makeStyles from './scheduling-column-styles';

function SchedulingColumnComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <EmployeeCardTag name={'Leia Ferreira'} occupation={'Cabeleireira'} />

      <SchedulingContainerCardsTags />
    </Box>
  );
}

export default SchedulingColumnComponent;
