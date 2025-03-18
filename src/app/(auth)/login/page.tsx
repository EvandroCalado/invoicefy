import { redirect } from 'next/navigation';

import { auth, signIn } from '@/app/auth';
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

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) redirect('/dashboard');

  return (
    <main className='flex min-h-screen items-center justify-center p-5'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='mb-4'>
            <Logo />
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

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
