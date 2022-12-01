import { LoadEmployees } from '~/app/domain/usecases';

export interface EmployeesTableProps {
  employeesHttpResponse: LoadEmployees.Response;
  openScheduling: () => void;
}
