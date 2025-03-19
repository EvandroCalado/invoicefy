import { getSession } from '@/lib/get-session';

const DashboardPage = async () => {
  await getSession();

  return (
    <div className='p-5'>
      <h1>DashboardPage</h1>
    </div>
  );
};

export default DashboardPage;
