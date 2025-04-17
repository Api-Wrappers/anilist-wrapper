import type { ANILISTSDK } from "../@types";

export class MangaService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getMangaById(id: number) {
    return this.client.GetMangaById({ id });
  }

  getMangaByTitle(title: string) {
    return this.client.GetMangaByTitle({ title });
  }

  getMangaCharacters(mediaId: number) {
    return this.client.GetMangaCharacters({ id: mediaId });
  }

  getMangaListByGenre(genre: string) {
    return this.client.GetMangaListByGenre({ genre });
  }

  getMangaRecommendations(mediaId: number) {
    return this.client.GetMangaRecommendations({ id: mediaId });
  }

  getMangaRelations(mediaId: number) {
    return this.client.GetMangaRelations({ id: mediaId });
  }

  getMangaStaff(mediaId: number) {
    return this.client.GetMangaStaff({ id: mediaId });
  }

  getMangaTrending(page: number, perPage: number) {
    return this.client.getMangaTrending({
      page,
      perPage,
    });
  }

  getMangaPopular(page: number, perPage: number) {
    return this.client.getMangaPopular({
      page,
      perPage,
    });
  }
}
