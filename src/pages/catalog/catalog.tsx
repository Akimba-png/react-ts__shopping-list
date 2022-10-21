import { useState } from 'react';
import { Product } from './../../types/product';
import ProductItem from '../../components/product-item/product-item';
import Modal from '../../components/modal/modal';

type CatalogProps = {
  catalogData: Product[],
}

function Catalog({catalogData}: CatalogProps): JSX.Element {
  const [isModalOpen, setModalStatus] = useState<boolean>(true);
  return (
    <section className='mx-auto p-4 w-[960px]'>
      <h1 className="mb-6  text-center text-3xl font-bold">Доступные товары</h1>
      <ul className='mx-auto w-[600px]'>
        {catalogData.map((data) => <ProductItem productData={data} key={data.id} />)}
      </ul>
      {isModalOpen &&
        <Modal
          onClose={() => setModalStatus(false)}
        >
          <h1 className='text-center'>Модальное окно</h1>
        </Modal>
        }
      {!isModalOpen && <button
        onClick={() => setModalStatus(true)}
        className='fixed right-[350px] bottom-10 px-4 py-2 w-40  bg-red-500 rounded'
      >
        Добавить в каталог
      </button>}
    </section>
  );
}

export default Catalog;
