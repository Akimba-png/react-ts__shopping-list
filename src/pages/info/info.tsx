const TOTAL_AMOUNT = 12000;

function Info(): JSX.Element {
  const data = new Array(TOTAL_AMOUNT).fill(null).map((_, i) => `Товар ${i + 1}`)
  return (
    <section className="container flex flex-col items-center mx-auto pt-4 w-[960px]">
      <h1 className="mb-1 font-bold text-3xl">Полный перечень товаров</h1>
      <p className="mb-4">{`Всего доступно товаров: ${data.length}`}</p>
      <form className="mb-4">
        <label className="font-bold text-md">
          Введите номер товара:
          <input
            type="text"
            name="filter-input"
            placeholder="12345"
            className="ml-4 px-2 py-1 border border border-2 border-gray-500 rounded"
            />
        </label>
      </form>
      <ul>
        {data.map(lot => (<li key={lot}>{lot}</li>))}
      </ul>
    </section>
  );
}

export default Info;
