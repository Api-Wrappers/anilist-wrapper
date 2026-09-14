import { gql } from "@api-wrappers/api-core";

export const GET_GENRES = gql`
  query GetGenres {
    GenreCollection
  }
`;
