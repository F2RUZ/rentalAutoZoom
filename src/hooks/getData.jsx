import axios from 'axios';
import { useState } from 'react';

function useData({ url }) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await axios.get(`https://realauto.limsa.uz/api/${url}`);
      setData(response?.data?.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }
  return { data, loading, getData };
}

export default useData;