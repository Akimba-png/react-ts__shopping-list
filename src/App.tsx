import { useFetch } from './hooks/useFetch';
import { Product } from './types/product';
import ProductItem from './components/product-item/product-item';
import { ApiRoute } from './const';

function App() {

  const {value, loadingStatus, error} = useFetch<Product[]>(ApiRoute.Product, []);

  if (loadingStatus) {
    return <h1 className='text-center'>Loading... Please wait</h1>
  }
  if (error) {
    return <h1 className='text-center text-red-500'>Something strange is going here...</h1>
  }
  return (
    <section className='mx-auto p-4 w-[960px]'>
      <h2 className="mb-6  text-center text-3xl font-bold">Доступные товары</h2>
      <ul className='mx-auto w-[600px]'>
        {value.map((data) => <ProductItem productData={data} key={data.id} />)}
      </ul>
    </section>
  );
}

export default App;
