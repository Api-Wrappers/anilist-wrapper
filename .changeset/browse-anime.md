---
'@api-wrappers/anilist-wrapper': minor
---

Added `browseAnime` to `AnimeService` with optional `genre`, `format`, `status`, and `seasonYear` filters, returning a paginated result with `pageInfo` (`hasNextPage`, `currentPage`, `total`) for infinite-scroll use cases.
