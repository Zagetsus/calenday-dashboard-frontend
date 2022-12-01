import { Box, Pagination } from '~/app/presentation/components';
import {
  TableBodyTag,
  TableHeadTag
} from '~/app/presentation/pages/employees/components/employees-scheduling-modal/components';
import makeStyles from './table-styles';

function TableComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <TableHeadTag />

      {Array.from(Array(3).keys()).map((_, key) => (
        <TableBodyTag key={`body-${key}`} />
      ))}

      <Box className={classes.paginationBox}>
        <Pagination count={14} color='primary' shape='rounded' />
      </Box>
    </Box>
  );
}

export default TableComponent;
