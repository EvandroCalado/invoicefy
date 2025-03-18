import { getSession } from '@/app/session';

const DashboardPage = async () => {
  await getSession();

  return (
    <div>
      <h1>DashboardPage</h1>
    </div>
  );
};

export default DashboardPage;
