import { useFetch } from './hooks/useFetch';
import { Product } from './types/product';
import { ApiRoute } from './const';

function App() {

  const {value, loadingStatus} = useFetch<Product[]>(ApiRoute.Product, []);

  if (loadingStatus) {
    return <h1>Loading... Please wait</h1>
  }
  return (
    <div>
      Hello world!
      {value.join()}
    </div>
  );
}

export default App;
