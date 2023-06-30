// import fetch from "node-fetch";
import { NotLoggedInException } from "./utils/exceptions";

interface ReqOptions {
  method: string;
  headers: {
    "Content-Type": string;
    Accept: string;
    Authorization?: string;
  };
  body: string;
}

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

    const options: ReqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };

    if (variables) options.body = JSON.stringify({ query, variables });
    if (this.access_token)
      options.headers.Authorization = `Bearer ${this.access_token}`;

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
