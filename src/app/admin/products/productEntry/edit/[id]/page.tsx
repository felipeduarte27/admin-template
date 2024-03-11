import PathComponent from '@/components/path-component';
import AddProductEntryForm from '@/components/forms/product-entry-form';
import { getEntryById } from '@/actions/entry';
import { getOnlyProducts } from '@/actions/products';

export default async function EditEntry({
  params,
}: {
  params: { id: string };
}) {
  const entry: any = await getEntryById(params.id);
  const products = await getOnlyProducts();

  return (
    <div>
      <PathComponent />
      <AddProductEntryForm entry={entry} products={products} />
    </div>
  );
}
