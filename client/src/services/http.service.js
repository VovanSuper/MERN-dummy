import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_BASE_API_URL}/ricknmorty`,
  timeout: 5000,
});

const getWithParams = ({ limit = null, offset = null }) => axiosInstance.get('/', { params: { limit, offset } });

export { getWithParams };
