import PathComponent from '@/components/path-component';
import AddProductForm from '@/components/forms/product-form';
import { getProductById } from '@/actions/products';

export default async function EditProduct({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  return (
    <div>
      <PathComponent />
      <AddProductForm product={product} />
    </div>
  );
}
