'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '@/components/ui/containers/content-container';
import { GridContainer } from '@/components/ui/containers/grid-container';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import * as z from 'zod';

const schema = z
  .object({
    name: z.string().min(1, { message: 'Nome: campo obrigatório !' }),
    email: z
      .string()
      .min(1, { message: 'E-mail: campo obrigatório !' })
      .email('E-mail: formato inválido'),
    password: z.string().min(6, { message: 'Senha: campo obrigatório !' }),
    confirm_password: z
      .string()
      .min(6, { message: 'Senha: campo obrigatório !' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não são iguais',
    path: ['confirm'],
  });

export default function SignUpForm() {
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
          Cadastro
        </Label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer className='mb-4'>
          <Label className=''>Nome:</Label>

          <Input
            register={register}
            name='name'
            errors={errors}
            placeholder='Nome'
          />

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
            name='password'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />

          <Label className=''>Senha:</Label>

          <Input
            register={register}
            name='confirm_password'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />
        </GridContainer>

        <div className='mx-auto mb-2'>
          <ErrorMessage
            errors={errors}
            name='confirm'
            render={({ message }: { message: string }) => (
              <div className='flex justify-center'>
                <p className='text-sm text-red-700'>{message}</p>
              </div>
            )}
          />
        </div>

        <Button type='submit' variant='secondary' className='mb-4'>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}
