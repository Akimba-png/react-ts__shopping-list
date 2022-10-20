import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { BASE_URL, ApiRoute } from '../const';

export const useFetch = <T>(endpoint: ApiRoute, initialValue: T) => {
  const [value, setValues] = useState<T>(initialValue);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setError('');
      setLoadingStatus(true);
      const response = await axios.get<T>(BASE_URL + endpoint);
      setValues(response.data);
      setLoadingStatus(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { value, loadingStatus, error };
};
