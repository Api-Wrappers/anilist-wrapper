import { Request } from "./fetcher";
import { Data, DataRes, Result } from "./types";
import { NotLoggedInException } from "./utils/exceptions";
import { UserProfileQuery } from "./utils/queries";

class User {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  getCurrentUser = async () => {
    if (!this.access_token) return new NotLoggedInException();

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(`query{Viewer{${UserProfileQuery}}}`);
  };
}

export { User };
