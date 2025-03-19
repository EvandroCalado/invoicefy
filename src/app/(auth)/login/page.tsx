import { redirect } from 'next/navigation';

import { Logo } from '@/components/shared/logo';
import { SubmitButton } from '@/components/shared/submit-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth, signIn } from '@/lib/auth';

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) redirect('/dashboard');

  return (
    <main className='flex min-h-screen items-center justify-center p-5'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='mb-4'>
            <Logo className='text-center' />
          </CardTitle>
          <CardDescription>Entre com com email abaixo</CardDescription>
        </CardHeader>

        <CardContent>
          <form
            action={async (formData) => {
              'use server';
              await signIn('nodemailer', formData);
            }}
            className='space-y-4'
          >
            <div>
              <Label htmlFor='email' className='mb-1'>
                Email
              </Label>
              <Input type='email' id='email' name='email' />
            </div>

            <SubmitButton>Entrar</SubmitButton>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
