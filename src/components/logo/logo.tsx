import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

const DEFAULT_STYLE = 'text-2xl font-bold uppercase';

function Logo(): JSX.Element {
  const pathName = useLocation().pathname;
  const isCatalogPage = pathName === AppRoute.Catalog;

  return (
    isCatalogPage
    ? <p className={DEFAULT_STYLE}>Shopping List app</p>
    :  <Link className={DEFAULT_STYLE} to={AppRoute.Catalog}>
      Shopping List app
    </Link>
  );
}

export default Logo;
