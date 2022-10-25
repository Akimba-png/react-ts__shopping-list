import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  const pathName = useLocation().pathname;
  const isCatalogPage = pathName === AppRoute.Catalog;
  const url = isCatalogPage ? '' : AppRoute.Catalog;
  return (
    <Link className={isCatalogPage ? "cursor-default" : ""} to={url}>
      <p className='text-2xl font-bold uppercase'>Shopping List app</p>
    </Link>
  );
}

export default Logo;
