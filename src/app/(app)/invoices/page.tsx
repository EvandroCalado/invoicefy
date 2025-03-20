import Link from 'next/link';

import { Plus } from 'lucide-react';

import { InvoicesList } from '@/components/invoices/invoices-list';
import { Button } from '@/components/ui/button';

const InvoicesPage = () => {
  return (
    <main className='p-5'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-muted-foreground/60 text-xl tracking-tight'>
          Faturas Recentes
        </h1>
        <Button asChild>
          <Link href='/invoices/create'>
            <Plus />
            Adicionar fatura
          </Link>
        </Button>
      </div>

      <InvoicesList />
    </main>
  );
};

export default InvoicesPage;
