import { CreateProduct } from '@/types/product.type';
import { baseApi } from '../baseApi';

export const getProductsApi = async (page: number, limit: number) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.get<any>({
    url: `/products/?page=${page}&limit=${limit}`,
  });

export const createProductApi = async (body: CreateProduct) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.post<any>({
    url: `/products`,
    body: JSON.stringify(body),
  });

export const deleteProductApi = async (id: string) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.delete<any>({
    url: `/products/${id}`,
  });
