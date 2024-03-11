import PathComponent from '@/components/path-component';
import AddProductDepartureForm from '@/components/forms/product-departure-form';
import { getDepartureById } from '@/actions/departure';
import { getOnlyProducts } from '@/actions/products';

export default async function EditEntry({
  params,
}: {
  params: { id: string };
}) {
  const departure: any = await getDepartureById(params.id);
  const products = await getOnlyProducts();

  return (
    <div>
      <PathComponent />
      <AddProductDepartureForm departure={departure} products={products} />
    </div>
  );
}
