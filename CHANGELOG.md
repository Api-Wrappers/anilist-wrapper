# Changelog

## Unreleased

### Minor Changes

- Added normalized root-object selected query support across read endpoints and
  mutations. Selected calls can now use roots like `media`, `page`, `user`,
  `mediaListCollection`, `mediaList`, `favorites`, and
  `deleteMediaListEntry`, while legacy direct selections remain supported for
  compatibility.

## 2.7.0

### Minor Changes

- 9383535: `getAnimeById` now returns the full detailed media fields: `trailer`, `rankings`, `stats`, full `tags` (with `isGeneralSpoiler`, `isMediaSpoiler`, `isAdult`, `userId`), full `externalLinks` (with `language`, `color`, `icon`, `notes`, `isDisabled`), `reviews` count, and `recommendations` count. Previously it used `MediaBasicFragment`; it now uses `MediaDetailedFragment` which is the same fragment used by `AnimeFragment`.

## 2.6.1

### Patch Changes

- Add `toggleFavorite` (American spelling) alias on `AnimeService` and `MangaService` as a convenience alias for `toggleFavourite`. Both spellings now work identically.

## 2.6.0

### Minor Changes

- [`c72e2f8`](https://github.com/Api-Wrappers/anilist-wrapper/commit/c72e2f8a603d0abd7eb7b89e33b8ca3b79501a95) Thanks [@TDanks2000](https://github.com/TDanks2000)! - Added `browseAnime` to `AnimeService` with optional `genre`, `format`, `status`, and `seasonYear` filters, returning a paginated result with `pageInfo` (`hasNextPage`, `currentPage`, `total`) for infinite-scroll use cases.

- [`c72e2f8`](https://github.com/Api-Wrappers/anilist-wrapper/commit/c72e2f8a603d0abd7eb7b89e33b8ca3b79501a95) Thanks [@TDanks2000](https://github.com/TDanks2000)! - Added `pageInfo.hasNextPage` to the `getAnimeListByGenre` response so callers can paginate through genre results.

### Patch Changes

- [`c72e2f8`](https://github.com/Api-Wrappers/anilist-wrapper/commit/c72e2f8a603d0abd7eb7b89e33b8ca3b79501a95) Thanks [@TDanks2000](https://github.com/TDanks2000)! - Added open-source trust-signal documentation for examples, contribution ideas, roadmap, issue templates, and pull request review.

  Added package verification guidance covering check, typecheck, live tests, build, and pack dry-run.

  Clarified package metadata and README positioning without changing the public wrapper API.

All notable changes to `@api-wrappers/anilist-wrapper` should be documented in
this file.

This repository did not previously keep an in-repo changelog. Future releases
should add dated sections with user-facing changes, migration notes, and
verification details.

## [2.5.6] - 2026-06-21

### Added

- ✨ Added `getSeasonalAnime` to `AnimeService` supporting `season`/`seasonYear`
  filters with paginated results containing `pageInfo` and media details.

### Fixed

- Applied Biome import ordering and formatting to `animeService`.
