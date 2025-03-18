import { SideMenu } from '@/components/shared/side-menu';

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='grid min-h-screen md:grid-cols-2'>
      <SideMenu />

      <div className='w-full'>{children}</div>
    </main>
  );
};

export default AppLayout;
