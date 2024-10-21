export type FetchParams = {
  url: string;
  body?: BodyInit;
  headers?: HeadersInit;
  requiresAuth?: boolean;
  credentials?: RequestCredentials;
};
