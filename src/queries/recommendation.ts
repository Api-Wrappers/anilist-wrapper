import { BaseQuery, RequestOptions } from '../@types';

export class Recommendation extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  getList = async (mediaID: number, page: number = 1, perPage: number = 25) => {
    const query = `query ($page: Int, $perPage: Int, $id: Int) { Recommendation (mediaId: $id) {
    media { id title { romaji english native userPreferred } type } }
    Page(page: $page, perPage: $perPage) { recommendations(mediaId: $id, sort: RATING_DESC) {
    rating userRating user { id name } id
    mediaRecommendation { id title { romaji english native userPreferred } type } } } }`;

    return await this.api.get(query, {
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

    return await this.api.get(query, {
      id: recommendID,
    });
  };
}
