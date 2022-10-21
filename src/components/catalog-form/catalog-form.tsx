function CatalogForm(): JSX.Element {
  return (
    <form action="http://test.test" method="post">
      <fieldset className="mb-8 p-4 outline outline-2 outline-slate-400 rounded">
        <legend className="mb-3 pt-4 text-center text-xl font-bold">Добавить товар</legend>
        <ul className="pb-6">
          <li className="flex items-center mb-4">
            <label className="mr-2 min-w-[130px]" htmlFor="form-title">Название товара:</label>
            <input
              className="p-2 border border-slate-400 rounded"
              type="text"
              name="title"
              id="form-title"
              placeholder="Введите название"
            />
          </li>
          <li className="flex items-center mb-2">
            <label className="mr-2 min-w-[130px]" htmlFor="form-rating">Рейтинг товара:</label>
            <input
              className="p-2 border border-slate-400 rounded"
              type="text"
              name="rating"
              id="form-rating"
              placeholder="Введите рейтинг"
            />
          </li>
        </ul>
      </fieldset>
      <button
        className="block ml-auto px-4 py-2 bg-yellow-500 rounded"
        type="submit">Добавить товар</button>
    </form>
  );
}

export default CatalogForm;
