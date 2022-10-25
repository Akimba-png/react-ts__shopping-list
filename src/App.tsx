import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog/catalog';
import Info from './pages/info/info';
import NotFound from './pages/not-found/not-found';
import { AppRoute } from './const';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path={AppRoute.Info} element={<Info /> } />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
