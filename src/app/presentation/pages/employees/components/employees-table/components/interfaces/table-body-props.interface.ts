import { LoadEmployees } from '~/app/domain/usecases';

export interface TableBodyProps {
  employees: LoadEmployees.Employees[];
  openScheduling: () => void;
}
