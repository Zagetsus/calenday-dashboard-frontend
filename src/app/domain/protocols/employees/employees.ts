import { LoadEmployees } from '~/app/domain/usecases';

export interface EmployeesProps {
  employeesHttpResponse: LoadEmployees.Response;
}
