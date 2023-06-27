import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../utils';
import { Hook, HookReponse } from '../utils/types';

const fetchHooks = () => {
  const url = `${API_BASE_URL}nextcloud/hooks`;

  return window.fetch(url).then((response) => response.json());
};

export const useWorkflows = (): HookReponse<Hook> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchHooks().catch((error) => {
        setError(error.message);
      });
      if (response) {
        setData(response.results);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
