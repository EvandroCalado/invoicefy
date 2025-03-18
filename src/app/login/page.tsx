import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from '../auth';

const LoginPage = () => {
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

            <Button className='w-full'>Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;
