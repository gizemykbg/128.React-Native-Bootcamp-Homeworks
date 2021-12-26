import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (initialUrl, initialParams = {}, skip = false) => {
  const [url, setUrl] = useState(initialUrl);
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () =>
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);

  const queryString = Object.keys(params)
    .map(key => '?' + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

  const fetchData = async () => {
    if (skip) return;
    setIsLoading(true);
    try {
      if (queryString === 'genre=' || queryString === '') {
        const response = await axios.get(url);
        setData(response.data);
      } else {
        const response = await axios.get(url + queryString);
        setData(response.data);
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, params, refetchIndex]);

  return {data, isLoading, hasError, setUrl, setParams, refetch};
};

export default useFetch;
