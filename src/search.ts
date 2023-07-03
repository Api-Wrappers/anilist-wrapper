import { Request } from "./fetcher";
import { Data, DataRes, Result } from "./types";
import { SearchQuery } from "./utils/queries";

class Search {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  private request = new Request();

  public anime = async (
    title: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = SearchQuery(title, page, perPage, "ANIME");

    const response = await this.request.makeGQLRequest(query).catch((error) => {
      return error;
    });

    return response;
  };

  public manga = async (
    title: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = SearchQuery(title, page, perPage, "MANGA");

    const response = await this.request.makeGQLRequest(query).catch((error) => {
      return error;
    });

    return response;
  };

  public staff = async (
    term: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      staff (search: $search) { id name { english: full } } } }`;

    return await this.request.makeGQLRequest(query, {
      search: term,
      page: page,
      perPage: perPage,
    });
  };

  public user = async (
    term: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      users (search: $search) { id name } } }`;

    return await this.request.makeGQLRequest(query, {
      search: term,
      page: page,
      perPage: perPage,
    });
  };

  public character = async (
    term: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      characters (search: $search) { id image { large medium } age gender description name { english: full } } } }`;

    return await this.request.makeGQLRequest(query, {
      search: term,
      page: page,
      perPage: perPage,
    });
  };

  public studio = async (
    term: string,
    page: number = 1,
    perPage: number = 10
  ) => {
    const query = `query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      studios (search: $search) { id name isAnimationStudio siteUrl} } }`;

    return await this.request.makeGQLRequest(query, {
      search: term,
      page: page,
      perPage: perPage,
    });
  };
}

export { Search };
