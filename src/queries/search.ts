import {
  AdvancedSearchOptions,
  BaseQuery,
  RequestOptions,
  SearchAnime,
  SearchCharacter,
  SearchManga,
  SearchRes,
  SearchStaff,
  SearchStudio,
  SearchUser,
} from '../@types';
import { AdvancedQuery, SearchQuery } from '../utils';

export class Search extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  public anime = async (
    title: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'media', SearchAnime>> => {
    try {
      const query = SearchQuery(title, page, perPage, 'ANIME');

      return await this.api.get<SearchRes<'media', SearchAnime>>(query);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public advanced_anime = async (variables: AdvancedSearchOptions): Promise<SearchRes<'media', SearchAnime>> => {
    try {
      return await this.api.get<SearchRes<'media', SearchAnime>>(AdvancedQuery(), { ...variables, type: 'ANIME' });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public manga = async (
    title: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'media', SearchManga>> => {
    try {
      const query = SearchQuery(title, page, perPage, 'MANGA');

      return await this.api.get<SearchRes<'media', SearchManga>>(query);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public advanced_manga = async (variables: AdvancedSearchOptions): Promise<SearchRes<'media', SearchManga>> => {
    try {
      return await this.api.get<SearchRes<'media', SearchManga>>(AdvancedQuery(), { ...variables, type: 'MANGA' });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public staff = async (
    term: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'staff', SearchStaff>> => {
    try {
      const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      staff (search: $search) { id name { english: full } } } }`;

      return await this.api.get<SearchRes<'staff', SearchStaff>>(query, {
        search: term,
        page: page,
        perPage: perPage,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public user = async (
    term: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'users', SearchUser>> => {
    try {
      const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      users (search: $search) { id name } } }`;

      return await this.api.get<SearchRes<'users', SearchUser>>(query, {
        search: term,
        page: page,
        perPage: perPage,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public character = async (
    term: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'characters', SearchCharacter>> => {
    try {
      const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      characters (search: $search) { id image { large medium } age gender description name { english: full } } } }`;

      return await this.api.get<SearchRes<'characters', SearchCharacter>>(query, {
        search: term,
        page: page,
        perPage: perPage,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  public studio = async (
    term: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<SearchRes<'studios', SearchStudio>> => {
    try {
      const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      studios (search: $search) { id name isAnimationStudio siteUrl} } }`;

      return await this.api.get<SearchRes<'studios', SearchStudio>>(query, {
        search: term,
        page: page,
        perPage: perPage,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
}
