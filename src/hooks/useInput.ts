import { useState, ChangeEvent, useEffect } from 'react';
import { Validator } from './../types/validation';
import { ValidRule } from './../const';

enum ErrorMessage {
  Empty = 'Поле не может быть пустым',
  MinLength = 'Минимальное кол-во символов',
  MaxLength = 'Максимальное кол-во символов',
  Unknown = 'Unknown error',
}

const useValidate = (currentValue: string, validator: Validator) => {
  const [ error, setError ] = useState<string>(ErrorMessage.Empty);

  useEffect(() => {
    for (const rule in validator) {
      if (Object.hasOwn(validator, rule)) {
        switch(rule) {
          case ValidRule.NotEmpty:
            currentValue ? setError('') : setError(ErrorMessage.Empty);
            break
          case ValidRule.MinLength:
            (currentValue && currentValue.length < validator[rule])
              ? setError(`${ErrorMessage.MinLength} ${validator[rule]}`)
              : setError((prev) => prev);
            break
          case ValidRule.MaxLength:
            currentValue.length > validator[rule]
              ? setError(`${ErrorMessage.MaxLength} ${validator[rule]}`)
              : setError((prev) => prev);
            break
          default:
            setError(ErrorMessage.Unknown);
        }
      }
    }
  }, [currentValue, validator]);

  return error;
};

export const useInput = (initialValue: string, validator: Validator) => {
  const [ value, setValue ] = useState<string>(initialValue);
  const [ isBlurred, setBlurredStatus ] = useState<boolean>(false);
  const error = useValidate(value, validator);

  const onChange = ((evt: ChangeEvent<HTMLInputElement>) => {
    setBlurredStatus(false);
    setValue(evt.target.value);
  });

  const onBlur = () => setBlurredStatus(true);

  return { value, isBlurred, error, onChange, onBlur };
};
