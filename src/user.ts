import { Request } from "./fetcher";
import { Data, DataRes, Result, ShowMutations, ShowMutationsTypes } from "./types";
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

  getMediaIdByAnilistID = async (anilistId: number) => {
    const query = `query($mediaId:Int){
                      Media(id:$mediaId){
                          mediaListEntry{
                              id
                          }
                      }
                    }`;

    const variables = {
      mediaId: anilistId,
    };

    const request = new Request(this.access_token);
    const response = (await request.makeGQLRequest(query, variables)) as {
      [key: string]: any;
    };
    return response?.data?.Media?.mediaListEntry?.id;
  };

  updateMedia = async (variables: ShowMutations) => {
    const keys = Object.keys(variables) as Array<keyof ShowMutations>;
    const firstKey = keys.shift()!;

    let mutationQueryVars = `\$${firstKey}: ${ShowMutationsTypes[firstKey]}`;
    let entryVar = `${firstKey}: \$${firstKey}`;

    for (const key of keys) {
      mutationQueryVars += `, \$${key}: ${ShowMutationsTypes[key]}`;
      entryVar += `, ${key}: \$${key}`;
    }

    const query = `mutation (${mutationQueryVars}) {
                        SaveMediaListEntry (${entryVar}) {
                          mediaId,
                          status,
                          score,
                          progress,
                          progressVolumes,
                          repeat,
                          priority,
                          private,
                          notes,
                          hiddenFromStatusLists,
                          customLists,
                          advancedScores,
                          startedAt {
                              day
                              month
                              year
                          },
                          completedAt{
                              day
                              month
                              year
                          },
                        }
                    }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, variables);
  };

  deleteShow = async (anilistId: number) => {
    const mediaListId = await this.getMediaIdByAnilistID(anilistId);
    if (mediaListId) {
      const query = `mutation ($id: Int) {
                  DeleteMediaListEntry (id: $id) {
                      deleted
                  }
             }`;

      const variables = {
        id: mediaListId,
      };

      const request = new Request(this.access_token);
      return await request.makeGQLRequest(query, variables);
    } else {
      throw Error("Unexpected media list Id");
    }
  };
}

export { User };
