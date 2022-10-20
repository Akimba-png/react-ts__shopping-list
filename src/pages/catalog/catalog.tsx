import { Product } from './../../types/product';
import ProductItem from '../../components/product-item/product-item';

type CatalogProps = {
  catalogData: Product[],
}

function Catalog({catalogData}: CatalogProps): JSX.Element {
  return (
    <section className='mx-auto p-4 w-[960px]'>
      <h1 className="mb-6  text-center text-3xl font-bold">Доступные товары</h1>
      <ul className='mx-auto w-[600px]'>
        {catalogData.map((data) => <ProductItem productData={data} key={data.id} />)}
      </ul>
    </section>
  );
}

export default Catalog;
