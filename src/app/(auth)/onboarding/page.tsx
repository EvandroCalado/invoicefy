'use client';

import { useActionState } from 'react';

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { onboardingAction } from '@/actions/onboarding-action';
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
import { onboardingSchema } from '@/schemas/onboarding-schema';

const Onboarding = () => {
  const [lastResult, action] = useActionState(onboardingAction, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <main className='flex min-h-screen items-center justify-center p-5'>
      <Card className='w-full max-w-sm'>
        <Logo className='text-center' />

        <CardHeader>
          <CardTitle>Finalizar cadastro</CardTitle>
          <CardDescription>Preencha o formulário abaixo</CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            noValidate
            className='space-y-4'
          >
            <div>
              <Label htmlFor='firstName' className='mb-1'>
                Nome
              </Label>
              <Input
                type='text'
                id='firstName'
                key={fields.firstName.key}
                name={fields.firstName.name}
                defaultValue={fields.firstName.initialValue}
              />
              <p className='text-xs text-red-500'>{fields.firstName.errors}</p>
            </div>
            <div>
              <Label htmlFor='lastName' className='mb-1'>
                Sobrenome
              </Label>
              <Input
                type='text'
                id='lastName'
                key={fields.lastName.key}
                name={fields.lastName.name}
                defaultValue={fields.lastName.initialValue}
              />
              <p className='text-xs text-red-500'>{fields.lastName.errors}</p>
            </div>

            <div>
              <Label htmlFor='address' className='mb-1'>
                Endereço
              </Label>
              <Input
                type='text'
                id='address'
                key={fields.address.key}
                name={fields.address.name}
                defaultValue={fields.address.initialValue}
              />
              <p className='text-xs text-red-500'>{fields.address.errors}</p>
            </div>

            <SubmitButton>Finalizar</SubmitButton>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Onboarding;
