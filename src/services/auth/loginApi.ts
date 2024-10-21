import { LoginType } from '@/types/auth/login.type';
import { baseApi } from '../baseApi';
import { controller } from './controller';

export const authLoginApi = async (body: LoginType) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.post<any>({
    url: `/${controller}/login/`,
    body: JSON.stringify(body),
  });
