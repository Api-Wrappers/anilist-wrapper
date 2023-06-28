export const anilistSearchQuery = (
  query: string,
  page: number,
  perPage: number,
  type: "ANIME" | "MANGA" = "ANIME"
) =>
  `query ($page: Int = ${page}, $id: Int, $type: MediaType = ${type}, $search: String = "${query}", $isAdult: Boolean = false, $size: Int = ${perPage}) { Page(page: $page, perPage: $size) { pageInfo { total perPage currentPage lastPage hasNextPage } media(id: $id, type: $type, search: $search, isAdult: $isAdult) { id idMal status(version: 2) title { userPreferred romaji english native } bannerImage popularity coverImage{ extraLarge large medium color } episodes format season description seasonYear chapters volumes averageScore genres nextAiringEpisode { airingAt timeUntilAiring episode }  } } }`;
