import { Header } from '@/components/shared/header';
import { SideMenu } from '@/components/shared/side-menu';
import { getSession } from '@/lib/get-session';

const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await getSession();

  return (
    <main className='flex h-screen'>
      <SideMenu />

      <div className='w-full'>
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AppLayout;
