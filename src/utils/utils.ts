import { MediaListStatus } from "../types";

export const generateQueryHeaders = (
  type: string,
  item: number | string,
  addItm?: string,
  status?: MediaListStatus
): [object, string] => {
  // A search term is needed. Throw an error.
  if (!item) {
    throw new Error("A term is not provided!");
  }
  if (addItm && typeof addItm !== "string") {
    throw new Error("The additional item in the query must be a string!");
  }

  switch (typeof item) {
    case "number":
      switch (type) {
        case "MediaListCollection":
          return [
            { id: item, type: addItm, status: status },
            "query ($id: Int, $type: MediaType, $status: MediaListStatus) { MediaListCollection(userId: $id, type: $type, status: $status) {",
          ];
        case "User":
        case "Staff":
        case "Character":
        case "Studio":
        case "Activity":
        case "Thread":
          return [{ id: item }, `query ($id: Int) { ${type} (id: $id) { `];
        default:
          throw new Error("This type doesn't have a query assigned to it!");
      }
    case "string":
      switch (type) {
        case "MediaListCollection":
          return [
            { name: item, type: addItm, status: status },
            "query ($name: String, $type: MediaType, $status: MediaListStatus) { MediaListCollection(userName: $name, type: $type, status: $status) {",
          ];
        case "User":
          return [
            { name: item },
            "query ($name: String) { User (name: $name) { ",
          ];
        // Both staff and character need the same query header.
        case "Staff":
        case "Character":
        case "Studio":
          return [
            { search: item },
            `query ($search: String) { ${type} (search: $search) { `,
          ];
        default:
          throw new Error("This type doesn't have a query assigned to it!");
      }
    default:
      throw new Error("Term does not match the required types!");
  }
};
