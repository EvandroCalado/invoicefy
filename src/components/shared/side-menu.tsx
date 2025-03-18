'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronLeft, LayoutDashboard, LogOut, Wallet } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const links = [
  {
    id: 1,
    title: 'Painel',
    href: '/dashboard',
    icon: <LayoutDashboard />,
  },
  {
    id: 2,
    title: 'Faturas',
    href: '/invoices',
    icon: <Wallet />,
  },
];

export const SideMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'bg-foreground text-muted relative hidden h-full w-[220px] flex-col px-5 py-10 transition-all duration-300 md:flex',
        {
          'w-[80px]': !isOpenMenu,
        },
      )}
    >
      <Button
        size='icon'
        className='bg-foreground absolute top-5 -right-4 rounded-full hover:bg-zinc-800'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <ChevronLeft
          className={cn('transition-all duration-300', {
            'rotate-180': !isOpenMenu,
          })}
        />
      </Button>

      <h1 className='text-muted mb-8 text-center text-2xl font-semibold tracking-tight'>
        <span className={cn({ hidden: !isOpenMenu })}>Invoice</span>
        <span className='text-primary font-bold'>Fy</span>
      </h1>

      <div className='flex h-full flex-1 shrink flex-col justify-between'>
        <nav className='space-y-2'>
          {links.map((link) => (
            <TooltipProvider key={link.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className={cn(
                      'bg-foreground hover:bg-primary w-full justify-start',
                      {
                        'bg-primary': pathname === link.href,
                      },
                    )}
                  >
                    <Link href={link.href}>
                      {link.icon}{' '}
                      <span
                        className={cn({
                          hidden: !isOpenMenu,
                        })}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </Button>
                </TooltipTrigger>

                <TooltipContent
                  side='right'
                  className={cn({ hidden: isOpenMenu })}
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className='justify-start bg-zinc-800'
                onClick={() => signOut()}
              >
                <LogOut />{' '}
                <span
                  className={cn({
                    hidden: !isOpenMenu,
                  })}
                >
                  Sair
                </span>
              </Button>
            </TooltipTrigger>

            <TooltipContent
              side='right'
              className={cn({ hidden: isOpenMenu })}
            >
              Sair
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Separator className='my-8 bg-zinc-800' />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='justify-start bg-transparent p-0 transition-all duration-300 hover:bg-transparent'>
              <Avatar>
                {session?.user ? (
                  <AvatarImage
                    src={session?.user?.image ?? '/avatar.png'}
                    className='m-0'
                  />
                ) : (
                  <Skeleton className='size-8 rounded-full' />
                )}
              </Avatar>
              {session?.user ? (
                <span
                  className={cn(
                    'line-clamp-1 text-[10px] font-semibold tracking-tighter text-zinc-500 transition-all duration-300',
                    { hidden: !isOpenMenu },
                  )}
                >
                  {session?.user?.email}
                </span>
              ) : (
                <Skeleton className='h-3 w-32' />
              )}
            </Button>
          </TooltipTrigger>

          <TooltipContent side='right' className={cn({ hidden: isOpenMenu })}>
            Perfil
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
