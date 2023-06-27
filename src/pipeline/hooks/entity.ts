import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../utils';
import { Entity, HookReponse } from '../utils/types';

const fetchEntities = () => {
  const url = `${API_BASE_URL}entities`;

  return window.fetch(url).then((response) => response.json());
};

export const useEntities = (): HookReponse<Entity> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEntities().catch((error) => {
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
