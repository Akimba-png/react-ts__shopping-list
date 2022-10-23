import { useFetch } from './hooks/useFetch';
import { Product } from './types/product';
import Catalog from './pages/catalog/catalog';
import MainLoader from './components/loaders/main-loader/main-loader';
import ErrorNotifier from './components/error-notifier/error-notifier';
import { ApiRoute, Message } from './const';

function App() {
  const {value, addValue, loadingStatus, error} = useFetch<Product>(ApiRoute.Product, []);

  return (
    <div className='container mx-auto'>
      {loadingStatus && <MainLoader /> }
      {error && <ErrorNotifier message={Message.LoadingFail} additionalStyle='text-xl' />}
      {(!loadingStatus && !error) && <Catalog catalogData={value} onAddValue={addValue} />}
    </div>
  );
}

export default App;
