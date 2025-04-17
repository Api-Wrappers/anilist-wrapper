import { GraphQLClient } from "graphql-request";
import ky from "ky";
import { getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";

const kyFetchCore = async (
  input: string | URL | Request,
  init?: RequestInit
) => {
  const response = await ky(input.toString(), {
    method: init?.method,
    headers: init?.headers,
    body: init?.body,
    credentials: "same-origin",
    throwHttpErrors: false,
  });
  return response;
};

// Fix for graphql-request error preconnect missing when using ky instead of fetch
const kyFetch: typeof fetch = Object.assign(kyFetchCore, {
  preconnect: (input: string | URL): void => {},
});

export const createClient = (token?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) headers["Authorization"] = `Bearer ${token}`;

  const client = new GraphQLClient(ANILIST_API_URL, {
    fetch: kyFetch,
    headers,
  });

  const sdk = getSdk(client);

  return sdk;
};
