import { gql } from "@api-wrappers/api-core";

export const GET_MARKDOWN = gql`
  query GetMarkdown($markdown: String!) {
    Markdown(markdown: $markdown) {
      html
    }
  }
`;
