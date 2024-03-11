'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '../ui/containers/content-container';
import { GridContainer } from '../ui/containers/grid-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail: campo obrigatório !' })
    .email('E-mail: formato inválido'),
});

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <Container className='w-[400px]'>
      <div className='mb-8 flex border-b-2 p-2'>
        <Label variant='title' className='mx-auto mb-4'>
          Esqueceu a senha?
        </Label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer className='mb-8'>
          <Label className=''>Email:</Label>

          <Input
            register={register}
            name='email'
            errors={errors}
            placeholder='Email'
            variant='email'
          />
        </GridContainer>

        <Button type='submit' variant='secondary' className='mb-4'>
          Recuperar senha
        </Button>
      </form>
    </Container>
  );
}
