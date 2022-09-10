import { Box } from '~/app/presentation/components';
import { TableRowTag } from '~/app/presentation/pages/employees/components/employees-table/components';
import makeStyles from './table-body-styles';

function TableBodyComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <TableRowTag />
      <TableRowTag />
      <TableRowTag />
      <TableRowTag />
      <TableRowTag />
      <TableRowTag />
    </Box>
  );
}

export default TableBodyComponent;
