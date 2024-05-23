import { BaseQuery, RequestOptions, ShowMutations, ShowMutationsTypes } from '../@types';
import { UserProfile } from '../@types/user';
import { UserProfileQuery } from '../utils';
import { NotLoggedInException } from '../utils/exceptions';

export class User extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  getCurrentUser = async (): Promise<UserProfile> => {
    if (!this.access_token) throw new NotLoggedInException();

    return await this.api.get<{ data: { Viewer: UserProfile } }>(`query{Viewer{${UserProfileQuery}}}`).then((r) => r.data.Viewer);
  };

  getMediaIdByAnilistID = async (anilistId: number): Promise<number | undefined> => {
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

    const response = await this.api.get<{ data: { Media: { mediaListEntry: { id: number } } } }>(query, variables);
    return response?.data?.Media?.mediaListEntry?.id;
  };

  updateMedia = async (variables: ShowMutations): Promise<{ SaveMediaListEntry: ShowMutations }> => {
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

    return await this.api.get<{ data: { SaveMediaListEntry: ShowMutations } }>(query, variables).then((r) => r.data);
  };

  deleteShow = async (anilistId: number): Promise<{ DeleteMediaListEntry: { deleted: boolean } }> => {
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

      return await this.api.get<{ DeleteMediaListEntry: { deleted: boolean } }>(query, variables);
    } else {
      throw Error('Unexpected media list Id');
    }
  };
}
