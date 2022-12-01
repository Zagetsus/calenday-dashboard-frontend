import { Box, Pagination } from '~/app/presentation/components';
import {
  TableBodyTag,
  TableEmptyTag,
  TableHeadTag
} from '~/app/presentation/pages/employees/components/employees-table/components';
import { EmployeesTableProps } from '~/app/presentation/pages/employees/components/interfaces/employees-table-props.interface';

function EmployeesTableComponents({
  employeesHttpResponse,
  openScheduling
}: EmployeesTableProps) {
  const { employees, meta } = employeesHttpResponse;
  const hasEmployees = !!employees.length;

  return (
    <Box>
      <TableHeadTag />

      {!hasEmployees && <TableEmptyTag />}

      {hasEmployees && (
        <>
          <TableBodyTag employees={employees} openScheduling={openScheduling} />

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              page={meta.currentPage}
              style={{ margin: '48px auto' }}
              count={meta.totalPages}
              color='primary'
              shape='rounded'
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default EmployeesTableComponents;
