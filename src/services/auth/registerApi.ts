import { RegisterType } from '@/types/auth/register.type';
import { baseApi } from '../baseApi';
import { controller } from './controller';

export const authRegisterApi = async (body: RegisterType) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseApi.post<any>({
    url: `/${controller}/register/`,
    body: JSON.stringify(body),
  });
