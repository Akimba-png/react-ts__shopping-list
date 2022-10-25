import { createContext } from 'react';
import { Product } from '../types/product';

interface IApiContext {
  addValue: (data: Product) => void,
}

export const ApiContext = createContext<IApiContext>({
  addValue: (data: Product) => {},
});
