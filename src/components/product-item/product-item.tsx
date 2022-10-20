import { useState } from 'react';
import { Product } from '../../types/product';

type ProductProps = {
  productData: Product;
};

function ProductItem({productData}: ProductProps): JSX.Element {
  const {title, description, price, rating, image} = productData;
  const [isDescriptionOpen, setDescriptionStatus] = useState<boolean>(false);

  const buttonCustomStyle = isDescriptionOpen ? 'bg-blue-500' : 'bg-yellow-500';
  const buttonStyles = ['w-56 h-10 rounded', buttonCustomStyle];

  const handleButtonClick = () => {
    setDescriptionStatus(prev => !prev);
  };

  return (
    <li className='flex flex-col mb-4 p-4 border-2 rounded border-slate-400'>
      <h2 className='mb-6 text-center text-2xl font-bold'>{title}</h2>
      <img src={image} className="block mx-auto mb-4 w-40 h-40" alt="picture about image" />
      <div className='flex justify-between items-center mb-4'>
        <p className='font-bold'>{`Рейтинг товара: ${rating.rate}`}</p>
        <div className='flex items-center gap-x-4'>
          <p className='font-bold'>{`Цена: ${price}$`}</p>
          <button
            onClick={handleButtonClick}
            className={buttonStyles.join(' ')}
          >
            {isDescriptionOpen ? 'Скрыть описание' : 'Показать описание'}
          </button>
        </div>
      </div>
      {isDescriptionOpen && <p>{description}</p>}
    </li>
  );
}

export default ProductItem;
