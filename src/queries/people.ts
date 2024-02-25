import { BaseQuery, RequestOptions } from '../@types';
import {
  CharactersBirthdayTodayResponse,
  FavoriteStaffResponse,
  PeopleCharacterQuery,
  PeopleFavoriteCharacterMutationResponse,
  PeopleStaffResponse,
  StaffBirthdayTodayResponse,
} from '../@types/people';
import { generateQueryHeaders } from '../utils';
import { NoIdException } from '../utils/exceptions';

export class People extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  character = async (id: number): Promise<PeopleCharacterQuery> => {
    if (!id) throw new NoIdException('Character');

    const queryVars = generateQueryHeaders('Character', id);

    const query =
      queryVars[1] +
      `id name { english: full native alternative alternativeSpoiler userPreferred } 
    image { large medium } gender dateOfBirth { year month day } age bloodType description 
    isFavourite favourites isFavouriteBlocked 
        media { nodes { id title { romaji english native userPreferred } type } } } }`;

    return await this.api.get<PeopleCharacterQuery>(query, queryVars[0]);
  };

  favouriteCharacter = async (id: number): Promise<PeopleFavoriteCharacterMutationResponse> => {
    if (!id) throw new NoIdException('Character');

    const query = `mutation ($charID: Int) {
      ToggleFavourite(characterId: $charID) {
        characters (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    return await this.api.get<PeopleFavoriteCharacterMutationResponse>(query, { charID: id });
  };

  charactersBirthdayToday = async (page: number = 1): Promise<CharactersBirthdayTodayResponse> => {
    const query = `query ($page: Int) { Page (page: $page) {
      characters (isBirthday: true) {
        id name { english: full }
    } } }`;

    return await this.api.get<CharactersBirthdayTodayResponse>(query, { page: page });
  };

  staff = async (idOrStaffName: string | number): Promise<PeopleStaffResponse> => {
    if (!idOrStaffName) throw new NoIdException('Staff');

    const queryVars = generateQueryHeaders('Staff', idOrStaffName);

    const query =
      queryVars[1] +
      `id name { english: full native alternative userPreferred } language: languageV2 image { large medium }
    description primaryOccupations gender dateOfBirth { year month day } dateOfDeath { year month day }
age yearsActive homeTown bloodType isFavourite isFavouriteBlocked favourites
    staffMedia { nodes { id title { romaji english native userPreferred } type } }
    characters { nodes { id name { english: full } } }
characterMedia { nodes { id title { romaji english native userPreferred } type } } } }`;

    return await this.api.get<PeopleStaffResponse>(query, queryVars[0]);
  };

  favouriteStaff = async (id: number): Promise<FavoriteStaffResponse> => {
    if (!id) throw new NoIdException('Staff');

    const query = `mutation ($staffID: Int) {
      ToggleFavourite(staffId: $staffID) {
        staff (page: 1, perPage: 25) { 
        nodes { id } 
    } } }`;

    return await this.api.get<FavoriteStaffResponse>(query, { staffID: id });
  };

  staffBirthdayToday = async (page: number = 1): Promise<StaffBirthdayTodayResponse> => {
    const query = `query ($page: Int) { Page (page: $page) {
      staff (isBirthday: true) {
        id name { english: full }
    } } }`;

    return await this.api.get<StaffBirthdayTodayResponse>(query, { page: page });
  };
}
