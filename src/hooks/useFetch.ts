import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { BASE_URL, ApiRoute, DATA_LIMIT } from '../const';

export const useFetch = <T>(endpoint: ApiRoute, initialValue: T[]) => {
  const [value, setValues] = useState<T[]>(initialValue);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setError('');
      setLoadingStatus(true);
      const response = await axios.get<T[]>(BASE_URL + endpoint + DATA_LIMIT);
      setValues(response.data as T[]);
      setLoadingStatus(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoadingStatus(false);
    }
  };

  const addValue = (data: T) => {
    setValues((prev) => [...prev, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { value, addValue, loadingStatus, error };
};
