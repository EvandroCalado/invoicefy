import { Input } from '../ui/input';
import { MobileMenu } from './mobile-menu';

export const Header = () => {
  return (
    <header className='border-muted-foreground/20 flex w-full items-center gap-4 border-b p-5'>
      <MobileMenu />

      <Input
        type='search'
        placeholder='Procurar'
        className='w-full md:ml-auto md:max-w-sm'
      />
    </header>
  );
};
