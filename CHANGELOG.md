# Changelog

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

## Unreleased

### Added

- ✨ Added `browseAnime` to `AnimeService` with optional `genre`, `format`, `status`,
  and `seasonYear` filters, returning a paginated result with `pageInfo`
  (`hasNextPage`, `currentPage`, `total`) for infinite-scroll use cases.
- ✨ Added `pageInfo.hasNextPage` to the `getAnimeListByGenre` response so callers
  can paginate through genre results.
- Added open-source trust-signal documentation for examples, contribution ideas,
  roadmap, issue templates, and pull request review.
- Added package verification guidance covering check, typecheck, live tests,
  build, and pack dry-run.

### Changed

- Clarified package metadata and README positioning without changing the public
  wrapper API.
