export const BASE_URL = 'https://fakestoreapi.com';

export enum ApiRoute {
  Product = '/products?limit=5',
}

export enum Message {
  LoadingFail = 'Something strange is going here',
}

export enum ValidRule {
  NotEmpty = 'not-empty',
  MinLength = 'min-length',
  MaxLength = 'max-length',
}
