import { Request } from "./fetcher";
import { utils } from "./utils";
import { NoIdException } from "./utils/exceptions";

class People {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  character = async (id: number) => {
    if (!id) throw new NoIdException("Character");

    const queryVars = utils.generateQueryHeaders("Character", id);

    const query =
      queryVars[1] +
      `id name { english: full native alternative alternativeSpoiler userPreferred } 
    image { large medium } gender dateOfBirth { year month day } age bloodType description 
    isFavourite favourites isFavouriteBlocked 
        media { nodes { id title { romaji english native userPreferred } type } } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, queryVars[0]);
  };

  favouriteCharacter = async (id: number) => {
    if (!id) throw new NoIdException("Character");

    const query = `mutation ($charID: Int) {
      ToggleFavourite(characterId: $charID) {
        characters (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { charID: id });
  };

  charactersBirthdayToday = async (page: number = 1) => {
    const query = `query ($page: Int) { Page (page: $page) {
      characters (isBirthday: true) {
        id name { english: full }
    } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, { page: page });
  };

  staff = async (idOrStaffName: string | number) => {
    if (!idOrStaffName) throw new NoIdException("Staff");

    const queryVars = utils.generateQueryHeaders("Staff", idOrStaffName);

    const query =
      queryVars[1] +
      `id name { english: full native alternative userPreferred } language: languageV2 image { large medium }
    description primaryOccupations gender dateOfBirth { year month day } dateOfDeath { year month day }
age yearsActive homeTown bloodType isFavourite isFavouriteBlocked favourites
    staffMedia { nodes { id title { romaji english native userPreferred } type } }
    characters { nodes { id name { english: full } } }
characterMedia { nodes { id title { romaji english native userPreferred } type } } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, queryVars[0]);
  };

  favouriteStaff = async (id: number) => {
    if (!id) throw new NoIdException("Staff");

    const query = `mutation ($staffID: Int) {
      ToggleFavourite(staffId: $staffID) {
        staff (page: 1, perPage: 25) { 
        nodes { id } 
    } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { staffID: id });
  };

  staffBirthdayToday = async (page: number = 1) => {
    const query = `query ($page: Int) { Page (page: $page) {
      staff (isBirthday: true) {
        id name { english: full }
    } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, { page: page });
  };
}

export { People };
