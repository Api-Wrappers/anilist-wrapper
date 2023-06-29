import { Request } from "./fetcher";
import { Data, DataRes, Result } from "./types";
import { NotLoggedInException } from "./utils/exceptions";
import { UserProfileQuery } from "./utils/queries";

class User {
  private access_token?: string;
  private request = new Request(this.access_token);

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  getCurrentUser = async () => {
    if (!this.access_token) return new NotLoggedInException();

    return await this.request.makeGQLRequest(`{Viewer{${UserProfileQuery}}}`);
  };
}

export { User };
