import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosGet = (url) => {
  const [response, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Add url as a dependency to refetch on url changes

  return { response, loading, error };
};

export default useAxiosGet;
