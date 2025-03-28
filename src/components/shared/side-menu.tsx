'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronLeft, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/lib/links';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export const SideMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'bg-foreground text-muted relative hidden h-full w-[280px] flex-col px-5 py-10 transition-all duration-300 md:flex',
        {
          'w-[80px]': !isOpenMenu,
        },
      )}
    >
      <Button
        size='icon'
        className='bg-foreground hover:bg-primary absolute top-5 -right-4 rounded-full'
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <ChevronLeft
          className={cn('transition-all duration-300', {
            'rotate-180': !isOpenMenu,
          })}
        />
      </Button>

      <h1 className='text-primary mb-8 text-center text-2xl font-semibold tracking-tight'>
        <span className={cn({ hidden: !isOpenMenu })}>Invoice</span>
        <span className='font-bold'>Fy</span>
      </h1>

      <div className='flex h-full flex-1 flex-col justify-between'>
        <nav className='space-y-2'>
          {links.map((link) => (
            <TooltipProvider key={link.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className={cn('bg-foreground w-full justify-start', {
                      'bg-primary': pathname.startsWith(link.href),
                    })}
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
                className='bg-muted-foreground/20 justify-start'
                onClick={() => signOut()}
              >
                <LogOut />
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

      <Separator className='bg-muted-foreground/20 my-8' />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='justify-start bg-transparent p-0 transition-all duration-300 hover:bg-transparent'>
              {session?.user ? (
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image ?? undefined}
                    className='m-0'
                  />
                  <AvatarFallback className='bg-muted-foreground font-semibold uppercase'>
                    {session?.user?.firstName?.charAt(0)}
                    {session?.user?.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Skeleton className='size-8 rounded-full' />
              )}
              {session?.user ? (
                <span
                  className={cn(
                    'text-muted-foreground line-clamp-1 font-semibold tracking-tighter transition-all duration-300',
                    { hidden: !isOpenMenu },
                  )}
                >
                  {session?.user?.firstName} {session?.user?.lastName}
                </span>
              ) : (
                <Skeleton className='h-3 w-28' />
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
