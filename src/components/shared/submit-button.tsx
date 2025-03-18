'use client';

import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '../ui/button';

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className='w-full' disabled={pending}>
          <Loader2 className='size-4 animate-spin' />
          <span>Enviando</span>
        </Button>
      ) : (
        <Button type='submit' className='w-full' disabled={pending}>
          <span>Enviar</span>
        </Button>
      )}
    </>
  );
};
