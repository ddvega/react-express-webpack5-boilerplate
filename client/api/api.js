import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export const useAPI = () => {
  const auth = useAuth();
  const instance = axios.create({ baseURL: '/api' });
  if (auth.token) {
    instance.defaults.headers.common['Authorization'] = auth.token ? `Bearer ${auth.token}` : null;
  }

  return instance;
};
