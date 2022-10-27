import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { LoginContext } from './../../context/login-context';
import { AppRoute } from './../../const';

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const { isAuth } = useContext(LoginContext);
  return isAuth ? children : <Navigate to={AppRoute.Catalog} />;
}

export default PrivateRoute;
