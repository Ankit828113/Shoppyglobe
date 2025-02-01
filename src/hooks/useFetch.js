import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
