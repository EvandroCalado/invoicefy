import { Badge } from '../ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { InvoicesActions } from './invoices-actions';

export const InvoicesList = () => {
  return (
    <Table>
      <TableCaption>Lista de faturas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>ID da Fatura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Data</TableHead>
          <TableHead className='text-right'>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium'>INV001</TableCell>
          <TableCell>Americanas</TableCell>
          <TableCell>R$ 250.00</TableCell>
          <TableCell>
            <Badge className='rounded-full'>Pago</Badge>
          </TableCell>
          <TableCell>19/03/2025</TableCell>
          <TableCell className='text-right'>
            <InvoicesActions />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
