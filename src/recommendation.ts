import { Request } from "./fetcher";
import { NoIdException } from "./utils/exceptions";

class Recommendation {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  getList = async (mediaID: number, page: number = 1, perPage: number = 25) => {
    const query = `query ($page: Int, $perPage: Int, $id: Int) { Recommendation (mediaId: $id) {
    media { id title { romaji english native userPreferred } type } }
    Page(page: $page, perPage: $perPage) { recommendations(mediaId: $id, sort: RATING_DESC) {
    rating userRating user { id name } id
    mediaRecommendation { id title { romaji english native userPreferred } type } } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, {
      id: mediaID,
      page: page,
      perPage: perPage,
    });
  };

  get = async (recommendID: number) => {
    const query = `query ($id: Int) { Recommendation (id: $id) {
      id rating userRating
      media { id title { romaji english native userPreferred } type } 
      mediaRecommendation { id title { romaji english native userPreferred } type }
      user { id name } } }}`;

    const request = new Request();

    return await request.makeGQLRequest(query, {
      id: recommendID,
    });
  };
}

export { Recommendation };
