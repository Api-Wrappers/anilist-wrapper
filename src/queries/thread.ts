import { BaseQuery, RequestOptions } from '../@types';
import { DeleteThreadResponse, GetCommentsResponse, GetThreadResponse } from '../@types/thread';
import { generateQueryHeaders } from '../utils';

export class Thread extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  get = async (id: number): Promise<GetThreadResponse> => {
    const queryVars = generateQueryHeaders('Thread', id);

    const query = `${queryVars[1]}
    id title body user { id name } replyCommentId
    viewCount isLocked isSticky isSubscribed replyUser { id name }
    isLiked repliedAt createdAt updatedAt
    likes { id name } categories { id name }
    mediaCategories { id title { english native romaji userPreferred } type }
      } }`;

    return await this.api.get<GetThreadResponse>(query, queryVars[0]);
  };

  delete = async (id: number): Promise<DeleteThreadResponse> => {
    const query = `mutation ($id: Int) { DeleteThread(id: $id) { deleted } }`;

    return await this.api.get<DeleteThreadResponse>(query, { id: id });
  };

  getComments = async (id: number, page: number = 1, perPage: number = 25): Promise<GetCommentsResponse> => {
    const query = `query ($threadID: Int, $page: Int, $perPage: Int) {
      Page(page:$page, perPage:$perPage) {
      threadComments(threadId: $threadID) {
      id user { id name } comment isLiked createdAt updatedAt
      likes { id name } childComments isLocked
      } } }`;

    return await this.api.get<GetCommentsResponse>(query, {
      threadID: id,
      page: page,
      perPage: perPage,
    });
  };
}
