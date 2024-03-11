import PathComponent from '@/components/path-component';
import AddProductDepartureForm from '@/components/forms/product-departure-form';
import { getOnlyProducts } from '@/actions/products';

export default async function AddDeparture() {
  const products = await getOnlyProducts();

  return (
    <div>
      <PathComponent />
      <AddProductDepartureForm departure={null} products={products} />
    </div>
  );
}
