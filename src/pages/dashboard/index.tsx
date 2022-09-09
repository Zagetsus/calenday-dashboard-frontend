import { BaseLayout } from '~/app/presentation/layouts';
import { makeDashboard } from '~/app/main/factories/pages';

function Dashboard() {
  return <BaseLayout>{makeDashboard()}</BaseLayout>;
}

export default Dashboard;
