import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className="container flex flex-col items-center mx-auto w-[960px] pt-44">
      <h1 className="mb-4 text-lgl font-bold">This page is not currently exists</h1>
      <Link className="text-blue-500" to={AppRoute.Catalog}>К каталогу</Link>
    </div>
  );
}

export default NotFound;
