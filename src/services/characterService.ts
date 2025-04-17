import type { ANILISTSDK } from "../@types";
import type {
  CharactersBirthdayTodayQuery,
  GetCharacterByIdQuery,
  ToggleFavoriteCharacterMutation,
} from "../__generated__/anilist-sdk";

/**
 * Service class for interacting with AniList character-related queries.
 */
export class CharacterService {
  private client: ANILISTSDK;

  /**
   * Constructs a new CharacterService instance.
   * @param client - An instance of the AniList SDK client.
   */
  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  /**
   * Retrieves character information by character ID.
   * @param id - The unique ID of the character.
   * @returns A promise resolving to the character data.
   */
  getCharacterById(id: number): Promise<GetCharacterByIdQuery> {
    return this.client.GetCharacterById({ id });
  }

  /**
   * Retrieves a list of characters whose birthdays are today.
   * @param page - Optional page number for pagination. Defaults to 1.
   * @param perPage - Optional number of characters per page. Defaults to 25.
   * @returns A promise resolving to the list of today's birthday characters.
   */
  getCharactersBirthdayToday(
    page = 1,
    perPage = 25
  ): Promise<CharactersBirthdayTodayQuery> {
    return this.client.CharactersBirthdayToday({ page });
  }

  /**
   * Toggles the favorite status of a character.
   * @param characterId - The ID of the character to toggle as favorite.
   * @returns A promise resolving to the result of the toggle mutation.
   */
  toggleFavoriteCharacter(
    characterId: number
  ): Promise<ToggleFavoriteCharacterMutation> {
    return this.client.ToggleFavoriteCharacter({ charID: characterId });
  }
}
