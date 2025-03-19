import { redirect } from 'next/navigation';

import { auth } from './auth';

export const getSession = async () => {
  const session = await auth();

  if (!session?.user) redirect('/login');

  if (
    !session.user.firstName ||
    !session.user.lastName ||
    !session.user.address
  ) {
    redirect('/onboarding');
  }

  return session;
};
