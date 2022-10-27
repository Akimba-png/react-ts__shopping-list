import { useContext, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../../context/login-context';
import Logo from '../logo/logo';
import { notAuthNotify } from './../../toasts/toasts';
import { AppRoute } from '../../const';

enum Style {
  LinkDefault = 'block px-8 py-4 bg-yellow-500 rounded hover:bg-yellow-500/50',
  LinkActive = 'shadow-[inset_0_-5px_0_0_rgba(255,0,0,0.4)]',
  LoginButton = 'block px-8 py-4 bg-gray-400 rounded hover:bg-gray-400/50',
}

const routes = Object.keys(AppRoute) as (keyof typeof AppRoute)[];
routes.pop();

function Navigation(): JSX.Element {
  const pathName = useLocation().pathname;
  const { isAuth, handleAuthStatus } = useContext(LoginContext);

  const handleInfoClick = (route: AppRoute) => (evt: MouseEvent<HTMLAnchorElement>) => {
    if (!isAuth && route === AppRoute.Info) {
      evt.preventDefault();
      notAuthNotify();
    }
  };

  return (
    <nav className='bg-gray-300'>
      <div className="grid grid-cols-[280px_150px_1fr] items-center mx-auto w-[960px]">
        <Logo />
        <button onClick={handleAuthStatus} className={Style.LoginButton}>{isAuth ? 'Sign out' : 'Sign in'}</button>
        <ul className='flex justify-end gap-1'>
          {routes.map((route, i) => {
            const keyValue = route + i.toString();
            return (
              <li key={keyValue}>
                {AppRoute[route] === pathName
                  ?  <p className={`${Style.LinkDefault} ${Style.LinkActive}`}>{route}</p>
                  : <Link className={Style.LinkDefault} to={AppRoute[route]} onClick={handleInfoClick(AppRoute[route])}>{route}</Link>
                }
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
