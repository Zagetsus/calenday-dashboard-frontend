import { LoadEmployees } from '~/app/domain/usecases';

export interface TableRowProps {
  employee: LoadEmployees.Employees;
  openScheduling: () => void;
}
