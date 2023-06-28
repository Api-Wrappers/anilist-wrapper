import { Request } from "./fetcher";
import { Search } from "./search";

class Anilist {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  search = async (
    query: string,
    page: number = 1,
    amount: number = 20,
    type: "ANIME" | "MANGA" = "ANIME"
  ) => {
    const searchReq = new Search();

    switch (type) {
      case "ANIME":
        return await searchReq.anime(query, page, amount);
      case "MANGA":
        return await searchReq.manga(query, page, amount);
      default:
        return await searchReq.anime(query, page, amount);
    }
  };
}

export { Anilist };
