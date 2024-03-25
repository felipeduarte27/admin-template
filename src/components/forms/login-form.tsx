'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '../ui/containers/content-container';
import { GridContainer } from '../ui/containers/grid-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { loginWeb } from '@/actions/session';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail: campo obrigatório !' })
    .email('E-mail: formato inválido'),
  senha: z.string().min(6, { message: 'Senha: campo obrigatório !' }),
});

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await loginWeb(data);
  };

  return (
    <Container className='w-[400px]'>
      <div className='mb-8 flex flex-col border-b-2 p-2'>
        <div className='mx-auto'>
          <Image src='/logo.jpeg' width='200' height='200' alt='logo' />
        </div>
        {/**
           *   <Label variant='title' className='mx-auto mb-4'>
          Login
        </Label>
           * 
           */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer className='mb-8'>
          <Label className=''>Login:</Label>

          <Input
            register={register}
            name='email'
            errors={errors}
            placeholder='Email'
            variant='email'
          />

          <Label className=''>Senha:</Label>

          <Input
            register={register}
            name='senha'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />
        </GridContainer>

        <Button type='submit' variant='secondary' className='mb-4'>
          Logar
        </Button>
      </form>
    </Container>
  );
}
