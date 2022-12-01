import { EmployeesProps } from '~/app/domain/protocols';
import { makeEmployees } from '~/app/main/factories/pages';
import { makeRemoteLoadEmployees } from '~/app/main/factories/usecases';
import { BaseLayout } from '~/app/presentation/layouts';
import handleSSRAuth from '~/pages/_handles/handle-ssr-auth';

export const getServerSideProps = handleSSRAuth(async context => {
  const { p } = context.query;

  const page = Number(p) || 1;
  const limit = 10;

  const remoteLoadEmployees = makeRemoteLoadEmployees(context);
  const employeesHttpResponse = await remoteLoadEmployees.load({
    page,
    limit
  });

  return {
    props: {
      employeesHttpResponse
    }
  };
});

function Dashboard(props: EmployeesProps) {
  return <BaseLayout>{makeEmployees(props)}</BaseLayout>;
}

export default Dashboard;
