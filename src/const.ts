export const BASE_URL = 'https://fakestoreapi.com';
export const DATA_LIMIT = '?limit=5';

export enum ApiRoute {
  Product = '/products',
}

export enum Message {
  LoadingFail = 'Something strange is going here',
}

export enum ValidRule {
  NotEmpty = 'not-empty',
  MinLength = 'min-length',
  MaxLength = 'max-length',
}
