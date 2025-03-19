import { z } from 'zod';

export const onboardingSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Deve ter pelo menos 3 caracteres' }),
  lastName: z.string().min(3, { message: 'Deve ter pelo menos 3 caracteres' }),
  address: z.string().min(3, { message: 'Deve ter pelo menos 3 caracteres' }),
});
