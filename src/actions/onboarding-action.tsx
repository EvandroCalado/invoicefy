'use server';

import { redirect } from 'next/navigation';

import { parseWithZod } from '@conform-to/zod';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { onboardingSchema } from '@/schemas/onboarding-schema';

export const onboardingAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const session = await auth();

  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const user = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      address: submission.value.address,
    },
  });

  redirect('/dashboard');
};
