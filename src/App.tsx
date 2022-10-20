import { useFetch } from './hooks/useFetch';
import { Product } from './types/product';
import Catalog from './pages/catalog/catalog';
import Loader from './components/loader/loader';
import ErrorNotifier from './components/error-notifier/error-notifier';
import { ApiRoute, Message } from './const';

function App() {
  const {value, loadingStatus, error} = useFetch<Product[]>(ApiRoute.Product, []);

  return (
    <div className='container mx-auto'>
      {loadingStatus && <Loader /> }
      {error && <ErrorNotifier message={Message.LoadingFail} />}
      {(!loadingStatus && !error) && <Catalog catalogData={value} />}
    </div>
  );
}

export default App;
