'use client';

import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '../ui/button';

type SubmitButtonProps = {
  children: React.ReactNode;
};

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className='w-full' disabled={pending}>
          <Loader2 className='size-4 animate-spin' />
          <span>Carregando</span>
        </Button>
      ) : (
        <Button type='submit' className='w-full' disabled={pending}>
          <span>{children}</span>
        </Button>
      )}
    </>
  );
};
