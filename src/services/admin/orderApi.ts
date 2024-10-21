import { baseApi } from '../baseApi';
import { controller } from './controller';

export const getOrdersApi = async () =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.get<any>({
    url: `/${controller}`,
  });
