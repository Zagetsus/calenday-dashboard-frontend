import { makeDashboard } from '~/app/main/factories/pages';
import { BaseLayout } from '~/app/presentation/layouts';

function Dashboard() {
  return <BaseLayout>{makeDashboard()}</BaseLayout>;
}

export default Dashboard;
