import { useState, ChangeEvent, useTransition } from 'react';
import InfoList from './../../components/info-list/info-list';

const TOTAL_AMOUNT = 12000;
const DEFAULT_DATA = new Array(TOTAL_AMOUNT).fill(null).map((_, i) => `Товар ${i + 1}`);
const filterData = (value: string) => {
  return (
    value
      ? DEFAULT_DATA.filter((data) => data.includes(value))
      : DEFAULT_DATA
  );
};

function Info(): JSX.Element {
  const [ value, setValue ] = useState<string>('');
  const [ filter, setFilter ] = useState<string>('');
  const [ isPending, startTransition ] = useTransition();
  const filteredData = filterData(filter);

  const handleFilterChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    startTransition(() => {
      setFilter(evt.target.value);
    });
  };

  return (
    <section className="container flex flex-col items-center mx-auto pt-4 w-[960px]">
      <h1 className="mb-1 font-bold text-3xl">Полный перечень товаров</h1>
      <p className="mb-4">{`Всего доступно товаров: ${DEFAULT_DATA.length}`}</p>
      <form className="mb-4">
        <label className="font-bold text-md">
          Введите номер товара:
          <input
            type="text"
            name="filter-input"
            placeholder="12345"
            className="ml-4 px-2 py-1 border border border-2 border-gray-500 rounded"
            value={value}
            onChange={handleFilterChange}
            />
        </label>
      </form>
      {isPending && <p>Запрос обрабатывается</p>}
      <InfoList data={filteredData} />
    </section>
  );
}

export default Info;
