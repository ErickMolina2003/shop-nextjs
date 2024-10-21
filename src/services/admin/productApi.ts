import { baseApi } from '../baseApi';

export const getProductsApi = async () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.get<any>({
    url: `/products`,
  });
