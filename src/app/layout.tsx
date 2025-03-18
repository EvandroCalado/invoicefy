import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { SessionProvider } from 'next-auth/react';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Invoicefy',
  description: 'Gere suas faturas com de forma fácil.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
      <html lang='pt-BR'>
        <body className={`${geistSans.variable} antialiased`}>{children}</body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
