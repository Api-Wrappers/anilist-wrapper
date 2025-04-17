import type { ANILISTSDK } from "../@types";

export class AnimeService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getAnimeById(id: number) {
    return this.client.GetAnimeById({ id });
  }

  getAnimeBySearch(search: string, page = 1, perPage = 10) {
    return this.client.SearchAnime({ query: search, page, perPage });
  }

  getTrendingAnime(page = 1, perPage = 10) {
    return this.client.GetAnimeTrending({ page, perPage });
  }

  getPopularAnime(page = 1, perPage = 10) {
    return this.client.GetAnimePopular({ page, perPage });
  }

  getRecommendations(mediaId: number) {
    return this.client.GetAnimeRecommendations({ id: mediaId });
  }

  getCharacters(mediaId: number) {
    return this.client.GetAnimeCharacters({ id: mediaId });
  }

  getStaff(mediaId: number) {
    return this.client.GetAnimeStaff({
      id: mediaId,
    });
  }

  getRelations(mediaId: number) {
    return this.client.GetAnimeRelations({ id: mediaId });
  }

  getAnimeByTitle(title: string) {
    return this.client.GetAnimeByTitle({ title });
  }

  getAnimeListByGenre(genre: string, page = 1, perPage = 10) {
    return this.client.GetAnimeListByGenre({ genre, page, perPage });
  }
}
