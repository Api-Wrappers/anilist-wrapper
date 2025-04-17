import type { ANILISTSDK } from "../@types";

export class CharacterService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getCharacterById(id: number) {
    return this.client.GetCharacterById({ id });
  }

  getCharactersBirthdayToday(page = 1, perPage = 25) {
    return this.client.CharactersBirthdayToday({ page });
  }

  toggleFavoriteCharacter(characterId: number) {
    return this.client.ToggleFavoriteCharacter({ charID: characterId });
  }
}
