import { Box } from '~/app/presentation/components';
import {
  TableBodyTag,
  TableEmptyTag,
  TableHeadTag
} from '~/app/presentation/pages/employees/components/employees-table/components';

function EmployeesTableComponents() {
  return (
    <Box>
      <TableHeadTag />

      {/*<TableEmptyTag />*/}

      <TableBodyTag />
    </Box>
  );
}

export default EmployeesTableComponents;
