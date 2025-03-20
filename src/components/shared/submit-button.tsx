'use client';

import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          className={cn('flex w-full items-center gap-2', className)}
          disabled={pending}
        >
          <Loader2 className='size-4 animate-spin' />
          Carregando
        </Button>
      ) : (
        <Button
          type='submit'
          className={cn('flex w-full items-center gap-2', className)}
          disabled={pending}
        >
          {children}
        </Button>
      )}
    </>
  );
};
