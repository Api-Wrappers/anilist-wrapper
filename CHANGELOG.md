# Changelog

## 4.0.1

### Patch Changes

- 4d79c3a: Update development and CI dependencies, fix schema-drift workflow authentication, and keep release automation compatible with Changesets CLI v3.

## 4.0.0

### Major Changes

- a24a6ff: Release v4. See `docs/migrating-to-v4.md` for the upgrade steps.

  **Breaking changes**

  - Remove the v3 direct selections and bare page bodies that were deprecated in v3. `select` must be `{ <root>: { ... } }` (for example `{ media: { id: true } }`, which returns `{ media }`) or `{ page: { ... } }` on paginated methods. Other shapes throw a `TypeError` before a request is sent.
  - Add `status` before `options` on `media.getMediaList()`, `media.getMediaListByUsername()`, `mediaList.getMediaListByUser()`, and `mediaList.getMediaListByUsername()`. Add `page` and `perPage` before `options` on `anime.getAnimeByTitle()` and `manga.getMangaByTitle()`, and `perPage` before `options` on `staff.getStaffBirthdayToday()`. Options passed in the old position throw a `TypeError` instead of being misread.
  - Validate IDs, `perPage` (1 to 50), and `mediaType` (`"ANIME"` or `"MANGA"`) before sending requests. v3 mapped any `mediaType` other than `"ANIME"` to `"MANGA"`.
  - Selected `browseAnime()` and `getSeasonalAnime()` now sort by popularity and exclude adult titles, and selected title lookups return one result by default, matching the unselected calls.
  - Selected result types strip `undefined`, unwrap nested arrays, and type page results as `SelectedFields<Page, TSelect>`.
  - Require Node.js 18 or newer.

### Minor Changes

- 5251b41: Fix the selected-result mapped types with compile-time type tests, export the api-core error classes and guards plus an `AniList` alias, accept typed documents in `graphql.request`, and add package metadata (`engines`, `sideEffects`, a `./package.json` export, and `typescript` moved to devDependencies).
- ada1fd4: Return `pageInfo { hasNextPage currentPage }` from every default page query (search, title lookup, trending, popular, birthdays, and the user list), so `paginate()` and `collectPages()` work without a custom selection. `new Anilist(token)` now accepts `string | undefined`, so `new Anilist(process.env.ANILIST_TOKEN)` compiles and creates an unauthenticated client when the variable is unset. Document the social service, the remaining media, user, studio, and anime methods, and fix the custom transport example to JSON-encode request bodies.
- 0c6abf8: Add `manga.browseManga()` with genre, format, status, and start date filters, popularity sorting, adult filtering, and selection support, mirroring `anime.browseAnime`.
- 0569cb5: Add reference and read coverage with selection support: `media.getGenres()`, `media.getMediaTags()`, `media.getAiringSchedule()`, `media.getAiringSchedulesByMedia()`, and `user.getViewer()`/`user.getViewerStatistics()`.
- 9e9841c: Add media list write coverage: `mediaList.updateEntries()` for bulk `UpdateMediaListEntries`, `mediaList.deleteCustomList()`, studio support in the favourite selection builder, and `studio.toggleFavorite()`.
- cd543a0: Add review and recommendation coverage with selection support: `media.getReviews()`, `media.getRecommendationsPage()`, `media.saveRecommendation()`, `media.rateReview()`, `media.saveReview()`, `media.deleteReview()`, and `user.getReviews()`.
- ab15d23: Add social and forum read coverage with selection support where results are not union-typed: `social.getFollowing()`, `getFollowers()`, `getNotifications()`, `getActivities()`, `getActivity()`, `getActivityReplies()`, `getActivityReply()`, `getThreads()`, `getThread()`, `getThreadComments()`, `getThreadComment()`, `getSiteStatistics()`, `getMarkdown()`, `toggleFollow()`, and `toggleLike()`. Legacy direct selections are now marked deprecated in JSDoc and the migration guide, with removal planned for the next major release.
- 18f42ea: Add social and forum write coverage: `social.saveTextActivity()`, `saveMessageActivity()`, `saveActivityReply()`, `deleteActivity()`, `deleteActivityReply()`, `toggleActivitySubscription()`, `toggleActivityPin()`, `saveThread()`, `saveThreadComment()`, `deleteThread()`, `deleteThreadComment()`, and `toggleThreadSubscription()`. Union/interface results stay raw-GraphQL for projections.
- 1a0fdbd: Add quality-of-life utilities: `paginate()` and `collectPages()` pagination helpers, `assertPositiveInt()`/`normalizePerPage()` validation at media/user/list boundaries, and optional `page`/`perPage` arguments on `getAnimeByTitle`/`getMangaByTitle`. Docs now cover pagination limits and the anime/manga naming table, and the user API auth note and CHANGELOG formatting are corrected.
- 97a423e: Fix and harden the new service surface before release:

  - `media.getMediaList()`, `media.getMediaListByUsername()`, `mediaList.getMediaListByUser()`, and `mediaList.getMediaListByUsername()` now forward `status` on the default SDK path too, not only on selected queries.
  - `social.getNotifications()` no longer resets the unread notification count as a side effect. Pass `{ resetNotificationCount: true }` to opt in.
  - `social.toggleLike()` now requires the `LikeableType`, which AniList needs to resolve the ID.
  - ID and `perPage` validation now covers the anime, manga, character, staff, studio, and social services, not only media, user, and media lists.
  - `mediaList.updateEntries()` rejects an empty `ids` array, and `mediaList.saveEntry()` validates `id` and `mediaId`.
  - `studio.getStudioBySearch()` validates page selections like the other search methods.
  - `paginate()` and `collectPages()` validate `startPage` and `maxPages`.

- a1a5eb2: Fix selected-query correctness: staff selection root collision, browse/seasonal filters, title lookup page size, staff birthday pagination, list status forwarding, and selection validation errors.

### Patch Changes

- 8f08843: Improve npm package discovery with more specific AniList, anime, manga, GraphQL, and TypeScript search keywords.
- 87bd503: Fix selected documents that AniList rejected: `social.getFollowers()` and `social.getFollowing()` now declare `$userId: Int!`. Page selections must now select the result field (for example `media`), because AniList rejects the unused filter variables in a `pageInfo`-only document and computes `pageInfo` from that field. Add `bun run test:documents`, which validates every selected document against AniList's live schema.

## 3.2.0

### Minor Changes

- bbaad44: Add a `StudioService` (`anilist.studio`) for querying studios directly: `getStudioById` for a single studio and `getStudioBySearch` for a paginated search. Both support the `select` API, and the new `StudioSelect`, `StudioPageSelect`, `SelectedStudio`, and `SelectedStudioPage` types are exported.

## 3.1.0

### Minor Changes

- 234b999: Add configurable api-core 1.1.0 options, injected HTTP clients, and per-request dynamic token providers while preserving backwards compatibility with the string-token constructor.
- c8f5c16: Generate the AniList SDK with the generic requester plugin, route requests through api-core 1.1.0's requester bridge, and remove the post-generation patch script.
- 86b2bd6: Expose api-core timeout, cache, tag, operation-name, header, and abort controls through raw GraphQL requests.
- a82be96: Expose the underlying api-core HTTP client, client bundle factory, and disposal lifecycle.

### Patch Changes

- 49c6e88: Reject conflicting duplicate GraphQL fragments instead of silently keeping the first definition.
- a3da0c6: Update the runtime dependency to `@api-wrappers/api-core` 1.1.0.

## 3.0.0

### Major Changes

- 70e4533: Add schema-derived field selection across every wrapper query and mutation with normalized response roots, legacy selection compatibility, current AniList mutation inputs, safer runtime validation, and refreshed generated API types.

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

## [2.5.6] - 2026-06-21

### Added

- ✨ Added `getSeasonalAnime` to `AnimeService` supporting `season`/`seasonYear`
  filters with paginated results containing `pageInfo` and media details.

### Fixed

- Applied Biome import ordering and formatting to `animeService`.
