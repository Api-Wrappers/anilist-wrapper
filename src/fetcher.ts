import axios from "axios";
import { NotLoggedInException } from "./utils/exceptions";

class Request {
  private access_token?: string | undefined;

  constructor(access_token?: string) {
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.access_token ? `Bearer ${this.access_token}` : "",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

    try {
      const res = await fetch("https://graphql.anilist.co", options);

      const { status, statusText } = res;

      if (status !== 200) {
        if (statusText)
          return new Error(
            `Anilist Api returned with a ${status} status. ${statusText}`
          );
        throw new Error(
          `Anilist Api returned with a ${status} status. The api might be down!`
        );
      }

      return await res.json();
    } catch (error) {
      return (error as Error).message;
    }
  };
}

export { Request };
