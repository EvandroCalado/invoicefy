'use client';

import { useState } from 'react';

import { ArrowRight, CalendarIcon, Hash } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SubmitButton } from '../shared/submit-button';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

export const InvoicesCreate = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Badge variant='secondary'>Rascunho</Badge>
        <Input placeholder='Título' className='w-fit' />
      </div>

      <div className='flex items-end gap-4'>
        <div>
          <Label className='mb-1'>Numero da fatura</Label>
          <div className='flex h-9 items-center overflow-hidden rounded-md border'>
            <div className='border-r p-1.5'>
              <Hash className='size-5' />
            </div>
            <div className='p-1.5'>5</div>
          </div>
        </div>
        <div>
          <Label className='mb-1'>Moeda</Label>
          <Select>
            <SelectTrigger className='w-[200px]'>
              <SelectValue placeholder='Selecione a moeda' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='BRL'>Brasil -- BRL</SelectItem>
              <SelectItem value='USD'>Estados Unidos -- USD</SelectItem>
              <SelectItem value='EUR'>Europa -- EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex gap-4'>
        <div>
          <Label className='mb-1'>De</Label>
          <div className='space-y-2'>
            <Input placeholder='Seu nome' />
            <Input type='email' placeholder='Seu email' />
            <Input placeholder='Seu Endereço' />
          </div>
        </div>
        <div>
          <Label className='mb-1'>Para</Label>
          <div className='space-y-2'>
            <Input placeholder='Cliente nome' />
            <Input type='email' placeholder='Cliente email' />
            <Input placeholder='Cliente Endereço' />
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div>
          <Label className='mb-1'>Data</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className={cn(
                  'w-[200px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground',
                )}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? (
                  new Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'long',
                  }).format(date)
                ) : (
                  <span>Selecione a data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                fromDate={new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label className='mb-1'>Vencimento</Label>
          <Select>
            <SelectTrigger className='w-[230px]'>
              <SelectValue placeholder='Selecione um vencimento' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>No dia da geração</SelectItem>
              <SelectItem value='15'>Para 15 dias</SelectItem>
              <SelectItem value='30'>Para 30 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-3'>
          <Label className='mb-1' htmlFor='description'>
            Descrição
          </Label>
          <Textarea id='description' placeholder='Digite uma descrição' />
        </div>
        <div>
          <Label className='mb-1' htmlFor='quantity'>
            Quantidade
          </Label>
          <Input type='number' id='quantity' />
        </div>
        <div>
          <Label className='mb-1' htmlFor='rate'>
            Taxa
          </Label>
          <Input type='number' id='rate' />
        </div>
        <div>
          <Label className='mb-1' htmlFor='amount'>
            Valor
          </Label>
          <Input type='number' id='amount' />
        </div>
      </div>

      <div className='flex flex-col items-end gap-2'>
        <div className='flex w-[200px] justify-between'>
          <span>Subtotal</span>
          <span>R$ 250,00</span>
        </div>
        <div className='flex w-[200px] justify-between font-semibold'>
          <span>Total(BRL)</span>
          <span>R$ 250,00</span>
        </div>
      </div>

      <div>
        <Label htmlFor='observation' className='mb-1'>
          Observação
        </Label>
        <Textarea
          placeholder='Adicione uma observação ou notas'
          id='observation'
        />
      </div>

      <SubmitButton className='ml-auto w-fit'>
        Enviar Fatura <ArrowRight />
      </SubmitButton>
    </div>
  );
};
