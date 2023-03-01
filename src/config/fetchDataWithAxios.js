import api from "../components/api/base";

export const fetchDataWithAxios = async (method, endpoint) => {
  const response = await api[method](endpoint);
  return response;
};
