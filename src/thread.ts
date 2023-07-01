import { Request } from "./fetcher";
import { utils } from "./utils";

class Thread {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  get = async (id: number) => {
    const queryVars = utils.generateQueryHeaders("Thread", id);

    const query = `${queryVars[1]}
    id title body user { id name } replyCommentId
    viewCount isLocked isSticky isSubscribed replyUser { id name }
    isLiked repliedAt createdAt updatedAt
    likes { id name } categories { id name }
    mediaCategories { id title { english native romaji userPreferred } type }
      } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, queryVars[0]);
  };

  delete = async (id: number) => {
    const query = `mutation ($id: Int) { DeleteThread(id: $id) { deleted } }`;

    const reqest = new Request(this.access_token);

    return await reqest.makeGQLRequest(query, { id: id });
  };

  getComments = async (id: number, page: number = 1, perPage: number = 25) => {
    const query = `query ($threadID: Int, $page: Int, $perPage: Int) {
      Page(page:$page, perPage:$perPage) {
      threadComments(threadId: $threadID) {
      id user { id name } comment isLiked createdAt updatedAt
      likes { id name } childComments isLocked
      } } }`;

    const request = new Request();

    return await request.makeGQLRequest(query, {
      threadID: id,
      page: page,
      perPage: perPage,
    });
  };
}

export { Thread };
