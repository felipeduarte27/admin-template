import PathComponent from '@/components/path-component';
import AddProductEntryForm from '@/components/forms/product-entry-form';
import { getOnlyProducts } from '@/actions/products';

export default async function AddProduct() {
  const products = await getOnlyProducts();

  return (
    <div>
      <PathComponent />
      <AddProductEntryForm entry={null} products={products} />
    </div>
  );
}
