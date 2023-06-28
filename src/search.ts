import { Request } from "./fetcher";
import { Data, DataRes, Result } from "./types";
import { anilistSearchQuery } from "./utils/queries";

class Search {
  constructor() {}

  private request = new Request();

  public anime = async (
    title: string,
    page: number = 1,
    amount: number = 10
  ) => {
    const query = anilistSearchQuery(title, page, amount, "ANIME");

    const response = await this.request.makeGQLRequest(query).catch((error) => {
      return error;
    });

    return response;
  };

  public manga = async (
    title: string,
    page: number = 1,
    amount: number = 10
  ) => {
    const query = anilistSearchQuery(title, page, amount, "MANGA");

    const response = await this.request.makeGQLRequest(query).catch((error) => {
      return error;
    });

    return response;
  };
}

export { Search };
