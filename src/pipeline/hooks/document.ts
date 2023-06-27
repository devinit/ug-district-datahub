import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../utils';
import { DataDocument, HookReponse } from '../utils/types';

const fetchDocuments = () => {
  const url = `${API_BASE_URL}documents`;

  return window.fetch(url).then((response) => response.json());
};

export const useDocuments = (): HookReponse<DataDocument> => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDocuments().catch((error) => {
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
