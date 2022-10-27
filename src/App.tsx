import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog/catalog';
import Info from './pages/info/info';
import NotFound from './pages/not-found/not-found';
import PrivateRoute from './components/private-route/private-route';
import Navigation from './components/navigation/navigation';
import { ToastContainer } from 'react-toastify';
import { AppRoute } from './const';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={AppRoute.Catalog} element={<Catalog />} />
        <Route path={AppRoute.Info} element={
          <PrivateRoute>
            <Info />
          </PrivateRoute>
        } />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
