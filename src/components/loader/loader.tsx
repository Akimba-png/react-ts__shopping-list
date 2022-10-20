import './loader.style.css';

function Loader(): JSX.Element {
  return (
    <div className='flex flex-col items-center pt-40'>
      <div className="mb-6 lds-dual-ring"></div>
      <p className="text-center text-2xl font-bold">Loading...</p>
      <p className="text-center">please wait</p>
    </div>
  );
}

export default Loader;
