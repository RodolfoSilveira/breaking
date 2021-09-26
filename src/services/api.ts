import axios from 'axios';
import { base } from 'constants/endpoints';

const api = axios.create({
  baseURL: base,
});

export default api;
