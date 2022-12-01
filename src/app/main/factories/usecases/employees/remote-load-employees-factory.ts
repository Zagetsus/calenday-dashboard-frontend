import { GetServerSidePropsContext } from 'next';
import { RemoteLoadEmployees } from '~/app/application/usecases/employees/remote-load-employees';
import { makeAuthorizedHttpClientDecorator } from '~/app/main/factories/decorators';

export const makeRemoteLoadEmployees = (
  context?: GetServerSidePropsContext
) => {
  return new RemoteLoadEmployees(
    '/v1/employees',
    makeAuthorizedHttpClientDecorator(context)
  );
};
