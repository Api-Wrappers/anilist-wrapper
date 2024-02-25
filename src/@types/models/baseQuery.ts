import { API } from '../../utils';
import { RequestOptions } from '../types';

export class BaseQuery {
  protected api: API;

  constructor(protected readonly access_token?: string, protected readonly options?: RequestOptions) {
    this.api = new API(access_token, options);
  }
}
