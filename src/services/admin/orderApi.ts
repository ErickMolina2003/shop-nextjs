import { Order } from '@/types/order.type';
import { baseApi } from '../baseApi';
import { controller } from './controller';

export const getOrdersApi = async () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.get<any>({
    url: `/${controller}`,
  });

export const createOrderApi = async (body: Order) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.post<any>({
    url: `/${controller}`,
    body: JSON.stringify(body),
  });
