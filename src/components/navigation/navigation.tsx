import { Link, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';

const LINK_DEFAULT_STYLE = 'block px-8 py-4 bg-yellow-500 rounded hover:bg-yellow-500/50';
const routes = Object.keys(AppRoute) as (keyof typeof AppRoute)[];
routes.pop();

function Navigation(): JSX.Element {
  const pathName = useLocation().pathname;

  return (
    <nav className='bg-gray-300'>
      <div className="grid grid-cols-[280px_1fr] items-center mx-auto w-[960px]">
        <Logo />
        <ul className='flex justify-end gap-1'>
          {routes.map((route, i) => {
            const keyValue = route + i.toString();
            return (
              <li
                className={
                  AppRoute[route] === pathName ? 'shadow-[0_5px_0_0_rgba(255,0,0,0.6)]' : ''
                }
                key={keyValue}
              >
                <Link className={LINK_DEFAULT_STYLE} to={AppRoute[route]}>{route}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
