import { Box } from '~/app/presentation/components';
import {
  CurrentDayTag,
  TableRowTag
} from '~/app/presentation/pages/employees/components/employees-scheduling-modal/components/table-body/components';
import makeStyles from './table-body-styles';

function TableBodyComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <CurrentDayTag />

      <Box className={classes.rowBox}>
        {Array.from(Array(5).keys()).map((_, key) => (
          <TableRowTag key={key} />
        ))}
      </Box>
    </Box>
  );
}

export default TableBodyComponent;
