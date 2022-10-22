import { useInput } from './../../hooks/useInput';
import { Validator } from './../../types/validation';
import ErrorNotifier from '../error-notifier/error-notifier';
import { ValidRule } from './../../const';

const ERROR_MESSAGE_STYLE = 'absolute text-base';
const ERROR_TITLE_STYLE = ' -top-[26px]';
const ERROR_RATING_STYLE = ' top-[106px]';
const titleValidator: Validator = {[ValidRule.NotEmpty]: 1, [ValidRule.MinLength]: 5};
const ratingValidator: Validator = {[ValidRule.NotEmpty]: 1, [ValidRule.MaxLength]: 2};

function CatalogForm(): JSX.Element {
  const titleInput = useInput('', titleValidator);
  const ratingInput = useInput('', ratingValidator);
  return (
    <form action="http://test.test" method="post">
      <fieldset className="mb-8 p-4 outline outline-2 outline-slate-400 rounded">
        <legend className="mb-3 pt-4 text-center text-xl font-bold">Добавить товар</legend>
        <ul className="relative pb-6">
          <li className="flex items-center mb-4">
            {
              (titleInput.isBlurred && titleInput.error) &&
              <ErrorNotifier
                message={titleInput.error}
                additionalStyle={ERROR_MESSAGE_STYLE + ERROR_TITLE_STYLE}
              />
            }
            <label className="mr-2 min-w-[130px]" htmlFor="form-title">Название товара:</label>
            <input
              className="p-2 border border-slate-400 rounded"
              type="text"
              name="title"
              id="form-title"
              placeholder="Введите название"
              value={titleInput.value}
              onChange={titleInput.onChange}
              onBlur={titleInput.onBlur}
            />
          </li>
          <li className="flex items-center mb-2">
            {
              (ratingInput.isBlurred && ratingInput.error) &&
              <ErrorNotifier
                message={ratingInput.error}
                additionalStyle={ERROR_MESSAGE_STYLE + ERROR_RATING_STYLE}
              />
            }
            <label className="mr-2 min-w-[130px]" htmlFor="form-rating">Рейтинг товара:</label>
            <input
              className="p-2 border border-slate-400 rounded"
              type="text"
              name="rating"
              id="form-rating"
              placeholder="Введите рейтинг"
              value={ratingInput.value}
              onChange={ratingInput.onChange}
              onBlur={ratingInput.onBlur}
            />
          </li>
        </ul>
      </fieldset>
      <button
        className="block ml-auto px-4 py-2 bg-yellow-500 rounded disabled:opacity-50"
        type="submit"
        disabled={Boolean(titleInput.error) || Boolean(ratingInput.error)}
      >
        Добавить товар
      </button>
    </form>
  );
}

export default CatalogForm;
