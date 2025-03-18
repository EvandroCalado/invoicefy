import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <h1 className='text-primary text-center text-3xl font-normal tracking-tight'>
        Invoice<span className='font-bold'>fy</span>
      </h1>
    </Link>
  );
};
