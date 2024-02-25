import { BaseQuery, RequestOptions } from '../@types';
import {
  ActivityGet,
  ActivityUserActivity,
  DeleteActivityResponse,
  PostMessageActivityResponse,
  PostTextActivityResponse,
} from '../@types/activity';
import { ListActivityQuery, MessageActivityQuery, TextActivityQuery, generateQueryHeaders } from '../utils';
import { NoIdException } from '../utils/exceptions';

export class Activity extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  get = async (activityID: string): Promise<ActivityGet> => {
    if (!activityID) throw new NoIdException('Activity');

    const queryVars = generateQueryHeaders('Activity', activityID);

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

    return await this.api.get<ActivityGet>(query, queryVars[0]);
  };

  getUserActivity = async (user: number, page: number = 1, perPage: number = 25): Promise<ActivityUserActivity> => {
    if (!user) throw new NoIdException('User');

    const query = `query ($page: Int, $perPage: Int, $user: Int) {
      Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
      activities(userId: $user, sort:ID_DESC) {
          ... on ListActivity { ${ListActivityQuery} }
          ... on TextActivity { ${TextActivityQuery} }
          ... on MessageActivity { ${MessageActivityQuery} }
      } } }`;

    return await this.api.get<ActivityUserActivity>(query, {
      user: user,
      page: page,
      perPage: perPage,
    });
  };

  postText = async (text: string, id?: number): Promise<PostTextActivityResponse> => {
    if (!text) throw new Error('Text is required');

    const query = `mutation ($id: Int, $text: String) {
      SaveTextActivity(id: $id, text: $text) {
      ${TextActivityQuery}
    } }`;

    return await this.api.get<PostTextActivityResponse>(query, { id: id, text: text });
  };

  postMessage = async (
    text: string,
    recipientId: number,
    isPrivate: boolean = false,
    id?: number,
  ): Promise<PostMessageActivityResponse> => {
    const query = `mutation ($id: Int, $text: String, $recipientId: Int, $private: Boolean) {
    SaveMessageActivity(message: $text, id: $id, recipientId: $recipientId, private: $private) {
      ${MessageActivityQuery}
    } }`;

    return await this.api.get<PostMessageActivityResponse>(query, {
      id: id,
      text: text,
      recipientId: recipientId,
      private: isPrivate,
    });
  };

  delete = async (id: number): Promise<DeleteActivityResponse> => {
    const query = `mutation ($id: Int) { DeleteActivity(id: $id) { deleted } }`;

    return await this.api.get<DeleteActivityResponse>(query, { id: id });
  };
}
