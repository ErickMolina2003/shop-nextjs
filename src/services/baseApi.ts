'use client';
import { FetchParams } from '@/types/fetchParams.type';
import { Methods } from '@/types/methods.type';

const apiUrl = String(process.env.NEXT_PUBLIC_API_URL);

type TToken = string | undefined | null;

class ApiClient {
  private accessToken: TToken;

  //   private async fetchToken(): Promise<TToken> {
  //     if (authStore.getState().accessToken) {
  //       this.accessToken = authStore.getState().accessToken;
  //       return this.accessToken;
  //     }

  //     window.location.href = '/login';
  //     this.accessToken = null;
  //     return this.accessToken;
  //   }

  private async handleErrors(response: Response): Promise<Response> {
    if (response.status === 401) {
      window.location.replace('/login');
    }
    if (!response.ok) {
      const error = await response.json();
      // TODO: handle errors
      throw error;
    }
    return response;
  }

  private async fetch<T>({
    body,
    url,
    method = 'GET',
    headers = {
      'content-type': 'application/json',
    },
    credentials = 'include',
    // requiresAuth = true,
  }: {
    url: string;
    body?: BodyInit;
    method?: Methods;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
    requiresAuth?: boolean;
  }): Promise<T> {
    const requestHeaders = { ...headers };

    // if (requiresAuth) {
    //   const token = await this.fetchToken();
    //   if (!token) return {} as T;
    //   requestHeaders = {
    //     ...requestHeaders,
    //     Authorization: `Bearer ${token}`,
    //     'Id-Token': authStore.getState().idToken ?? '',
    //     'content-type': 'application/json',
    //   };
    // }

    const response = await fetch(`${apiUrl + url}`, {
      method,
      headers: requestHeaders,
      body,
      credentials,
    });

    await this.handleErrors(response);

    return response.json();
  }

  public async get<T>({
    url,
    body,
    headers,
    requiresAuth,
    credentials,
  }: FetchParams): Promise<T> {
    return await this.fetch<T>({
      url,
      method: 'GET',
      body,
      headers,
      requiresAuth,
      credentials,
    });
  }

  public async post<T>({
    url,
    body,
    headers,
    requiresAuth,
    credentials,
  }: FetchParams): Promise<T> {
    return await this.fetch<T>({
      url,
      method: 'POST',
      body,
      headers,
      requiresAuth,
      credentials,
    });
  }

  public async put<T>({
    url,
    body,
    headers,
    requiresAuth,
    credentials,
  }: FetchParams): Promise<T> {
    return await this.fetch<T>({
      url,
      method: 'PUT',
      body,
      headers,
      requiresAuth,
      credentials,
    });
  }

  public async patch<T>({
    url,
    body,
    headers,
    requiresAuth,
    credentials,
  }: FetchParams): Promise<T> {
    return await this.fetch<T>({
      url,
      method: 'PATCH',
      body,
      headers,
      requiresAuth,
      credentials,
    });
  }

  public async delete<T>({
    url,
    body,
    headers,
    requiresAuth,
    credentials,
  }: FetchParams): Promise<T> {
    return await this.fetch<T>({
      url,
      method: 'DELETE',
      body,
      headers,
      requiresAuth,
      credentials,
    });
  }
}

export const baseApi = new ApiClient();
