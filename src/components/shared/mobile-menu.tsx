'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogOut, Menu } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/lib/links';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Skeleton } from '../ui/skeleton';
import { Logo } from './logo';

export const MobileMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='bg-foreground text-muted border-muted-foreground p-4'
        >
          <SheetHeader>
            <SheetTitle className='text-muted'>
              <Logo className='text-2xl' />
            </SheetTitle>
            <SheetDescription>Navegue pelo nosso site</SheetDescription>
          </SheetHeader>

          <nav className='flex-1 space-y-2'>
            {links.map((link) => (
              <Button
                key={link.id}
                asChild
                className={cn('bg-foreground w-full justify-start', {
                  'bg-primary': pathname === link.href,
                })}
              >
                <Link href={link.href}>
                  {link.icon} <span>{link.title}</span>
                </Link>
              </Button>
            ))}
          </nav>

          <Button
            className='bg-muted-foreground/20 justify-start'
            onClick={() => signOut()}
          >
            <LogOut />
            <span>Sair</span>
          </Button>

          <Separator className='bg-muted-foreground/20 my-8' />

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
                )}
              >
                {session?.user?.firstName} {session?.user?.lastName}
              </span>
            ) : (
              <Skeleton className='h-3 w-28' />
            )}
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
