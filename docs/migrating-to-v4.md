# Migrating To v4

v4 removes the selection shapes that were deprecated in v3, fixes selected
queries that silently differed from their unselected versions, and validates
arguments before any request is sent. Calls without `select` return the same
response shapes as v3.

Most apps only need the first two sections. The rest covers behavior changes
you might notice in tests or logs.

## Checklist

1. Wrap every direct selection in its root: `{ select: { id: true } }` becomes
   `{ select: { media: { id: true } } }`, and read `result.media` instead of
   `result.Media`.
2. Wrap every bare page selection in `page`:
   `{ select: { pageInfo, media } }` becomes `{ select: { page: { pageInfo, media } } }`.
3. Move `select` options to the new argument position on the list-collection
   methods, `getAnimeByTitle`, `getMangaByTitle`, and `getStaffBirthdayToday`.
4. Keep `perPage` at 50 or below, and pass positive integer IDs.
5. Pass `mediaType` as exactly `"ANIME"` or `"MANGA"`.

TypeScript reports steps 1-3 at compile time. In JavaScript, each of them
throws a descriptive `TypeError` before a request is sent.

## Selections Must Use A Root

v3 accepted two selection shapes and picked one by looking at the keys. v4
accepts only the root shape, so the result key is always the lowercase root.

```typescript
// v3 (direct selection, removed)
const { Media } = await anilist.anime.getAnimeById(16498, {
	select: { id: true, title: { userPreferred: true } },
});

// v4
const { media } = await anilist.anime.getAnimeById(16498, {
	select: { media: { id: true, title: { userPreferred: true } } },
});
```

| v3 select | v3 result | v4 select | v4 result |
| --- | --- | --- | --- |
| `{ id: true }` on a media method | `{ Media }` | `{ media: { id: true } }` | `{ media }` |
| `{ id: true }` on `getCharacterById` | `{ Character }` | `{ character: { id: true } }` | `{ character }` |
| `{ id: true }` on `getStaffById` | `{ Staff }` | `{ staff: { id: true } }` | `{ staff }` |
| `{ id: true }` on `getStudioById` | `{ Studio }` | `{ studio: { id: true } }` | `{ studio }` |
| `{ id: true }` on a user method | `{ User }` | `{ user: { id: true } }` | `{ user }` |
| `{ lists: { ... } }` on a list collection | `{ MediaListCollection }` | `{ mediaListCollection: { lists: { ... } } }` | `{ mediaListCollection }` |
| `{ id: true }` on `mediaList.getMediaList` | `{ MediaList }` | `{ mediaList: { id: true } }` | `{ mediaList }` |
| `{ id: true }` on `mediaList.saveEntry` | `{ SaveMediaListEntry }` | `{ mediaList: { id: true } }` | `{ mediaList }` |
| `{ deleted: true }` on `deleteEntry` | `{ DeleteMediaListEntry }` | `{ deleteMediaListEntry: { deleted: true } }` | `{ deleteMediaListEntry }` |
| `{ anime: { ... } }` on a favourite toggle | `{ ToggleFavourite }` | `{ favorites: { anime: { ... } } }` | `{ favorites }` |
| `{ pageInfo, media }` on a page method | `{ page }` | `{ page: { pageInfo, media } }` | `{ page }` |

The [selection guide](./selection-migration.md#root-map) lists the root for
every method.

A mixed selection such as `{ select: { id: true, staff: { id: true } } }` used
to be read as a direct `Staff` selection. In v4 it throws. Write
`{ select: { staff: { id: true, staff: { id: true } } } }` instead.

## Argument Order Changes

New optional arguments were added before `options` on these methods. Pass
`undefined` for arguments you don't need.

| Method | v3 | v4 |
| --- | --- | --- |
| `media.getMediaList` | `(userId, mediaType, options?)` | `(userId, mediaType, status?, options?)` |
| `media.getMediaListByUsername` | `(userName, mediaType, options?)` | `(userName, mediaType, status?, options?)` |
| `mediaList.getMediaListByUser` | `(userId, mediaType, options?)` | `(userId, mediaType, status?, options?)` |
| `mediaList.getMediaListByUsername` | `(userName, mediaType, options?)` | `(userName, mediaType, status?, options?)` |
| `anime.getAnimeByTitle` | `(title, options?)` | `(title, page?, perPage?, options?)` |
| `manga.getMangaByTitle` | `(title, options?)` | `(title, page?, perPage?, options?)` |
| `staff.getStaffBirthdayToday` | `(page?, options?)` | `(page?, perPage?, options?)` |

```typescript
// v3
await anilist.media.getMediaList(userId, "ANIME", {
	select: { mediaListCollection: { lists: { name: true } } },
});

// v4: no status filter
await anilist.media.getMediaList(userId, "ANIME", undefined, {
	select: { mediaListCollection: { lists: { name: true } } },
});

// v4: only CURRENT entries
await anilist.media.getMediaList(userId, "ANIME", MediaListStatus.Current);
```

`getAnimeByTitle` and `getMangaByTitle` default to `page = 1, perPage = 1`, so
`getAnimeByTitle("Frieren", 1, 1, { select })` matches the unselected call.

## Validation Errors

Arguments are checked before a request is sent, so invalid calls fail fast
with a `TypeError` instead of an AniList error response.

- IDs (`id`, `mediaId`, `userId`, `animeId`, and so on) must be positive
  integers.
- `perPage` must be an integer from 1 to 50, AniList's maximum. v3 sent larger
  values and AniList silently capped them.
- `mediaType` must be `"ANIME"` or `"MANGA"`. v3 treated any other value,
  including `"anime"`, as `"MANGA"`.
- Page selections can only contain `pageInfo` and the method's result field,
  and must select the result field. Unknown keys inside `page` throw instead of
  being sent to AniList. A `pageInfo`-only selection also throws: AniList
  rejected those documents, and computes `pageInfo` from the result field.

The exported `assertPositiveInt`, `normalizePerPage`, and
`ANILIST_MAX_PER_PAGE` apply the same rules if you want to validate input
earlier.

## Selected Queries Now Match Unselected Queries

Several selected documents used different filters than their unselected
versions. v4 sends the same filters either way, so results can differ from v3
selected calls:

| Method | v3 selected behavior | v4 |
| --- | --- | --- |
| `anime.browseAnime` | No sort, adult titles included | `sort: POPULARITY_DESC`, `isAdult: false` |
| `anime.getSeasonalAnime` | No sort, adult titles included | `sort: POPULARITY_DESC`, `isAdult: false` |
| `anime.getAnimeByTitle` / `manga.getMangaByTitle` | Up to 10 results | `perPage` argument, default 1 |
| List-collection methods | `status` not supported | `status` forwarded on both paths |

Selections that contain `undefined` or `null` values now skip those fields
instead of throwing, which makes conditional selections easier to build.

## Type Changes

- Selected result types strip `undefined` from every branch, unwrap nested
  arrays, and type opaque scalars (such as `Json`) as `true` in selections.
  Code that worked around the old types with casts may now report unused or
  incorrect casts.
- Page results are typed as `SelectedFields<Page, TSelect>`, so only the
  selected page fields exist on the result.
- `typescript` is no longer a peer dependency.

## Package And Runtime

- Node.js 18 or newer is required (`engines.node: ">=18"`).
- The package is marked `sideEffects: false`, and `./package.json` is exported.
- The `Anilist` constructor still accepts a token string. It also accepts an
  options object; see [Client options](./client-options.md).

## New In v4

These are additive, so no migration is needed. See the
[changelog](../CHANGELOG.md) for details.

- `social` service for follows, notifications, activities, threads, comments,
  likes, site statistics, and markdown, including writes.
- Reviews, recommendations, genres, media tags, airing schedules, viewer
  queries, studio favourites, bulk list updates, and custom list deletion.
- `manga.browseManga` with the same filters as `anime.browseAnime`.
- `paginate()` and `collectPages()` pagination helpers.
- api-core error classes and guards (`ApiError`, `RateLimitError`,
  `isRateLimitError`, ...) and an `AniList` alias, exported from the package
  root.
