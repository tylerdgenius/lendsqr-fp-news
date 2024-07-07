export type BaseNewsResponse<T = any> = {
  status: 'ok';
  totalResults: number;
  articles: T;
};

export type BaseNewsErrorResponse = {
  status: 'error';
  code:
    | 'apiKeyMissing'
    | 'apiKeyExhausted'
    | 'apiKeyDisabled'
    | 'apiKeyInvalid'
    | 'parameterInvalid'
    | 'parametersMissing'
    | 'rateLimited'
    | 'sourcesTooMany'
    | 'sourceDoesNotExist'
    | 'unexpectedError';
  message: string;
};

export type News = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type GetAllNewsResponse =
  | BaseNewsResponse<News[]>
  | BaseNewsErrorResponse;
