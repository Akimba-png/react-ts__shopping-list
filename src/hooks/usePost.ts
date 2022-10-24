import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ApiRoute, BASE_URL } from '../const';

export const usePost = <T>(endPoint: ApiRoute, onSuccess: (value: T) => void) => {
  const [ isLoading, setLoadingStatus ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');

  const sendRequest = async (data: T, onFinish: () => void) => {
    try {
      setLoadingStatus(true);
      const response = await axios.post<T>(BASE_URL + endPoint, data);
      onSuccess(response.data);
      setLoadingStatus(false);
      onFinish();
      setError('');
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoadingStatus(false);
      setError(error.message);
    }
  };

  return { isLoading, error, sendRequest };
};
