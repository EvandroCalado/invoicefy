import Link from 'next/link';

import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/'>
      <h1
        className={cn(
          'text-primary text-3xl font-semibold tracking-tight',
          className,
        )}
      >
        <span> Invoice</span>
        <span className='font-bold'>Fy</span>
      </h1>
    </Link>
  );
};
