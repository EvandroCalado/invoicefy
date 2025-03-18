import { Header } from '@/components/shared/header';
import { SideMenu } from '@/components/shared/side-menu';

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
