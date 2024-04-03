'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '../ui/containers/content-container';
import { GridContainer } from '../ui/containers/grid-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormHeader } from '../ui/containers/form-header';
import { forgotPassword } from '@/actions/users';

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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const { email } = data;

    forgotPassword(email);

    reset();
  };
  return (
    <Container className='w-[400px]'>
      <FormHeader title='Esqueceu a senha?' />

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

        <Button
          type='submit'
          variant='secondary'
          className='mb-4'
          isSubmitting={isSubmitting}
        >
          Recuperar senha
        </Button>
      </form>
    </Container>
  );
}
