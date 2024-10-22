import { CreateProduct } from '@/types/product.type';
import { baseApi } from '../baseApi';

export const getProductsApi = async () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.get<any>({
    url: `/products`,
  });

export const createProductApi = async (body: CreateProduct) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.post<any>({
    url: `/products`,
    body: JSON.stringify(body),
  });
