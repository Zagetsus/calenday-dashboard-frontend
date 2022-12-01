import { EmployeesProps } from '~/app/domain/protocols';
import { EmployeesTag } from '~/app/presentation/pages/employees';

export const makeEmployees = (props: EmployeesProps) => {
  return <EmployeesTag {...props} />;
};
