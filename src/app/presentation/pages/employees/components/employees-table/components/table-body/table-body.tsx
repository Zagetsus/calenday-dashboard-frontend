import { Box } from '~/app/presentation/components';
import { TableRowTag } from '~/app/presentation/pages/employees/components/employees-table/components';
import { TableBodyProps } from '~/app/presentation/pages/employees/components/employees-table/components/interfaces/table-body-props.interface';
import makeStyles from './table-body-styles';

function TableBodyComponent({ employees, openScheduling }: TableBodyProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      {employees.map((employee, key) => (
        <TableRowTag
          key={`employee-${key}`}
          employee={employee}
          openScheduling={openScheduling}
        />
      ))}
    </Box>
  );
}

export default TableBodyComponent;
