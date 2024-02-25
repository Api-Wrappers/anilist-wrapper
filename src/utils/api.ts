import { ReqOptions, RequestOptions } from '../@types';
import { NotLoggedInException, TimeOutException } from './exceptions';

const BASE_URL = 'https://graphql.anilist.co';

export class API {
  private access_token?: string | undefined;
  private options?: RequestOptions;

  constructor(access_token?: string, options?: RequestOptions) {
    this.access_token = access_token;
    this.options = options;
  }

  async get<T>(query: string, variables?: Record<string, any>): Promise<T> {
    if (!query) throw new Error('No query provided');

    if (query.startsWith('mutation') && this.access_token === null) throw new NotLoggedInException();

    const controller = new AbortController();

    const options: ReqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    };

    if (variables) options.body = JSON.stringify({ query, variables });
    if (this.access_token) options.headers.Authorization = `Bearer ${this.access_token}`;

    try {
      const res = await fetch(BASE_URL, options);

      const { status, statusText } = res;

      if (status !== 200) {
        if (statusText) throw new Error(`Anilist Api returned with a ${status} status. ${statusText}`);
        throw new Error(`Anilist Api returned with a ${status} status. The api might be down!`);
      }

      return (await res.json()) as T;
    } catch (error) {
      if ((error as Error).name === 'AbortError') throw new TimeOutException(this.options?.timeout || 5000);
      throw new Error((error as Error).message);
    }
  }
}
