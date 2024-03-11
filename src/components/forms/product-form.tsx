'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '../ui/containers/content-container';
import { GridContainer } from '../ui/containers/grid-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '../ui/button/submit-button';
import { addProduct } from '@/actions/products';
import type { Products } from '../columns/columns-products-table';
import { editProduct } from '@/actions/products';
import { useToast } from '../ui/use-toast';

const schema = z.object({
  name: z.string({
    required_error: 'Nome: campo obrigatório !',
    invalid_type_error: 'Nome: campo obrigatório !',
  }),
});

type Props = {
  product: Products | null;
};

export default function AddProductForm({ product }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: product ? product.name : null,
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    if (product) {
      editProduct({ id: product.id, name: data.name });
    } else {
      addProduct(data);
      reset();
    }
    toast({
      title: 'Sucesso !',
      description: 'Dados cadastrados.',
      variant: 'constructive',
    });
  };

  return (
    <Container className='mt-16 w-[500px]'>
      <div className='mb-8 flex border-b-2 p-2'>
        <Label variant='title' className='mx-auto mb-4'>
          {product ? 'Atualizar' : 'Cadastrar'} Produto
        </Label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer className='mb-8'>
          <Label className=''>Nome:</Label>

          <Input
            register={register}
            name='name'
            errors={errors}
            placeholder='Nome'
          />
        </GridContainer>

        <SubmitButton
          text={product ? 'Atualizar' : 'Cadastrar'}
          variant='secondary'
          className='mb-4'
        />
      </form>
    </Container>
  );
}
