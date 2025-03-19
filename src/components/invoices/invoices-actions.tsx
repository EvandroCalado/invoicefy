import Link from 'next/link';

import {
  CircleCheckBig,
  CloudDownload,
  EllipsisVertical,
  Mail,
  Pencil,
  Trash,
} from 'lucide-react';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const InvoicesActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='text-muted-foreground bg-background hover:bg-muted-foreground/20 rounded-full'>
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            size='sm'
            className='bg-background text-muted-foreground hover:bg-muted-foreground/10 w-36 justify-start'
          >
            <Link href='/invoices/new' className='flex items-center gap-2'>
              <Pencil />
              Editar
            </Link>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            size='sm'
            className='bg-background text-muted-foreground hover:bg-muted-foreground/10 w-36 justify-start'
          >
            <Link href='/invoices/new' className='flex items-center gap-2'>
              <CloudDownload />
              Download
            </Link>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            size='sm'
            className='bg-background text-muted-foreground hover:bg-muted-foreground/10 w-44 justify-start'
          >
            <Link href='/invoices/new' className='flex items-center gap-2'>
              <Mail />
              Reenviar email
            </Link>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            size='sm'
            className='bg-background text-muted-foreground hover:bg-muted-foreground/10 w-44 justify-start'
          >
            <Link href='/invoices/new' className='flex items-center gap-2'>
              <Trash />
              Apagar
            </Link>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            size='sm'
            className='bg-background text-muted-foreground hover:bg-muted-foreground/10 w-44 justify-start'
          >
            <Link href='/invoices/new' className='flex items-center gap-2'>
              <CircleCheckBig />
              Marcar como pago
            </Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
