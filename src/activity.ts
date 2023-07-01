import { Request } from "./fetcher";
import { utils } from "./utils";
import { NoIdException } from "./utils/exceptions";
import {
  ListActivityQuery,
  MessageActivityQuery,
  TextActivityQuery,
} from "./utils/queries";

class Activity {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  get = async (activityID: number) => {
    if (!activityID) throw new NoIdException("Activity");

    const queryVars = utils.generateQueryHeaders("Activity", activityID);

    const query =
      queryVars[1] +
      `... on ListActivity {
          ${ListActivityQuery}
      }
      ... on TextActivity {
          ${TextActivityQuery}
      }
      ... on MessageActivity {
          ${MessageActivityQuery}
      }}}`;

    const request = new Request();

    return await request.makeGQLRequest(query, queryVars[0]);
  };

  getUserActivity = async (
    user: number,
    page: number = 1,
    perPage: number = 25
  ) => {
    if (!user) throw new NoIdException("User");

    const query = `query ($page: Int, $perPage: Int, $user: Int) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      activities(userId: $user, sort:ID_DESC) {
          ... on ListActivity { ${ListActivityQuery} }
          ... on TextActivity { ${TextActivityQuery} }
          ... on MessageActivity { ${MessageActivityQuery} }
      } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, {
      user: user,
      page: page,
      perPage: perPage,
    });
  };

  postText = async (text: string, id?: number) => {
    if (!text) throw new Error("Text is required");

    const query = `mutation ($id: Int, $text: String) {
      SaveTextActivity(id: $id, text: $text) {
      ${TextActivityQuery}
    } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { id: id, text: text });
  };

  postMessage = async (
    text: string,
    recipientId: number,
    isPrivate: boolean = false,
    id?: number
  ) => {
    const request = new Request(this.access_token);

    const query = `mutation ($id: Int, $text: String, $recipientId: Int, $private: Boolean) {
    SaveMessageActivity(message: $text, id: $id, recipientId: $recipientId, private: $private) {
      ${MessageActivityQuery}
    } }`;

    return await request.makeGQLRequest(query, {
      id: id,
      text: text,
      recipientId: recipientId,
      private: isPrivate,
    });
  };

  delete = async (id: number) => {
    const query = `mutation ($id: Int) { DeleteActivity(id: $id) { deleted } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { id: id });
  };
}

export { Activity };
