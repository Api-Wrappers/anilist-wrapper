import axios from "axios";
import { NotLoggedInException } from "./utils/exceptions";

class Request {
  private access_token?: string | undefined;

  constructor(access_token?: string) {
    if (!access_token) return;
    this.access_token = access_token;
  }

  public makeGQLRequest = async (
    query: string,
    variables?: object
  ): Promise<unknown | Error> => {
    if (!query) return new Error("No query provided");

    if (query.startsWith("mutation") && this.access_token === null)
      throw new NotLoggedInException();

    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      query: query,
      variables: variables,
    };

    try {
      const { data, status, statusText } = await axios.post(
        "https://graphql.anilist.co",
        options
      );

      if (status !== 200) {
        if (statusText)
          return new Error(
            `Anilist Api returned with a ${status} status. ${statusText}`
          );
        throw new Error(
          `Anilist Api returned with a ${status} status. The api might be down!`
        );
      }

      return data;
    } catch (error) {
      return error;
    }
  };
}

export { Request };
