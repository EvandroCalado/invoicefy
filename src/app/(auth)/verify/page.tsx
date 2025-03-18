import { redirect } from 'next/navigation';

import { AlertCircle, Mail } from 'lucide-react';

import { auth } from '@/app/auth';
import { Logo } from '@/components/shared/logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const VerifyPage = async () => {
  const session = await auth();

  if (session?.user) redirect('/dashboard');

  return (
    <div className='flex min-h-screen items-center justify-center p-5'>
      <Card className='w-full max-w-sm'>
        <Logo className='text-center' />

        <div className='bg-primary/10 border-primary mx-auto flex size-20 items-center justify-center rounded-full border-4'>
          <Mail className='text-primary size-10' />
        </div>

        <CardHeader className='text-center'>
          <CardTitle className='text-xl font-bold'>
            Verifique seu email!
          </CardTitle>
          <CardDescription>
            Link de verificação enviado para seu email.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className='flex items-center gap-4 rounded-md border border-yellow-300 bg-yellow-100/60 p-4'>
            <AlertCircle className='size-10 text-yellow-500' />
            <p className='text-sm text-yellow-700'>
              Se você não recebeu o email, verifique sua caixa de spam!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyPage;
