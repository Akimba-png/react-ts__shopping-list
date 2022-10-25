import { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ApiContext } from '../../context/api-context';
import { ModalContext } from './../../context/modal-context';
import { Product } from './../../types/product';
import MainLoader from '../../components/loaders/main-loader/main-loader';
import ErrorNotifier from '../../components/error-notifier/error-notifier';
import ProductItem from '../../components/product-item/product-item';
import Modal from '../../components/modal/modal';
import CatalogForm from './../../components/catalog-form/catalog-form';
import { ApiRoute, Message } from '../../const';

function Catalog(): JSX.Element {
  const {value: catalogData, addValue, loadingStatus, error} = useFetch<Product>(ApiRoute.Product, []);
  const { isModalOpen, handlerModalOpen, handlerModalClose } = useContext(ModalContext);

  return (
    <ApiContext.Provider value={{addValue}}>
      {loadingStatus && <MainLoader /> }
      {error && <ErrorNotifier message={Message.LoadingFail} additionalStyle='text-xl' />}
      {(!loadingStatus && !error) && (
        <section className='constainer mx-auto p-4 w-[960px]'>
          <h1 className="mb-6 text-center text-3xl font-bold">Доступные товары</h1>
          <ul className='mx-auto w-[600px]'>
            {catalogData.map((data, i) => <ProductItem productData={data} key={`${data.id}-${i}`} />)}
          </ul>
          {isModalOpen &&
            <Modal
              onClose={handlerModalClose}
            >
              <CatalogForm />
            </Modal>
          }
          {!isModalOpen && <button
            onClick={handlerModalOpen}
            className='fixed right-[350px] bottom-10 px-4 py-2 w-40  bg-red-500 rounded'
            >
              Добавить в каталог
            </button>
          }
        </section>
      )}
    </ApiContext.Provider>
  );
}

export default Catalog;
