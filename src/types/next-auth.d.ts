import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
      firstName: string;
      lastName: string;
      address: string;
      email: string;
      emailVerified: Date;
      image: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
  }
}
