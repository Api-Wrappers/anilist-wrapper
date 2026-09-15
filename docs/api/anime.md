# AnimeService

Access anime workflows through `anilist.anime`.

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getAnimeById(id)` | No | `Media` |
| `getAnimeByTitle(title, page?, perPage?)` | No | `Page.media` |
| `getAnimeBySearch(search, page?, perPage?)` | No | `Page.media` |
| `getTrendingAnime(page?, perPage?)` | No | `Page.media` |
| `getPopularAnime(page?, perPage?)` | No | `Page.media` |
| `getAnimeListByGenre(genre, page?, perPage?)` | No | `Page.media` |
| `getRecommendations(mediaId)` | No | `Media.recommendations` |
| `getRelations(mediaId)` | No | `Media.relations` |
| `getCharacters(mediaId)` | No | `Media.characters` |
| `getStaff(mediaId)` | No | `Media.staff` |
| `toggleFavorite(animeId)` | Yes | `ToggleFavourite` |
| `toggleFavourite(animeId)` | Yes | `ToggleFavourite` |

Selected calls use normalized roots: `media` for anime detail/sub-resource
methods, `page` for paginated methods, and `favorites` for favorite mutations.
See the [selection migration guide](../selection-migration.md).

## Lookup By ID

```typescript
const { Media } = await anilist.anime.getAnimeById(16498);

console.log(Media?.title?.userPreferred);
console.log(Media?.episodes);
console.log(Media?.siteUrl);
```

## Search

```typescript
const results = await anilist.anime.getAnimeBySearch("Cowboy Bebop", 1, 5);

const titles = results.Page?.media
	?.map((media) => media?.title?.userPreferred)
	.filter(Boolean);

console.log(titles);
```

## Pagination

The list methods accept an optional `page` and `perPage`. Leave them off and you
get the first page, with 10 results for every anime list method.

| Method | `page` default | `perPage` default |
| --- | --- | --- |
| `getAnimeBySearch` | `1` | `10` |
| `getTrendingAnime` | `1` | `10` |
| `getPopularAnime` | `1` | `10` |
| `getAnimeListByGenre` | `1` | `10` |
| `getAnimeByTitle` | `1` | `1` |

Pass both values when you want a specific window of results:

```typescript
// second page, 25 results per page
const page2 = await anilist.anime.getPopularAnime(2, 25);

for (const media of page2.Page?.media ?? []) {
	console.log(media?.title?.userPreferred);
}
```

AniList caps `perPage` at 50. Passing a larger value throws a `TypeError`
naming the limit, so requests fail before they reach the API.

AniList can return `null` at any level, including the `Page` itself and the
entries inside `media`. Use optional chaining, and fall back to an empty array
before you loop, the way the example does with `?? []`.

### Collecting every page

Use `collectPages` to gather all items sequentially. It stops when
`pageInfo.hasNextPage` is not `true` and propagates errors (including
`RateLimitError`) untouched.

```typescript
import { collectPages } from "@api-wrappers/anilist-wrapper";

const media = await collectPages(
	(page) => anilist.anime.getAnimeBySearch("Frieren", page, 50),
	(response) => ({
		pageInfo: response.Page?.pageInfo,
		items: response.Page?.media,
	}),
);

console.log(media.length);
```

`paginate` is the streaming variant if you would rather process items as they
arrive.

## Related Data

```typescript
const characters = await anilist.anime.getCharacters(16498);
const staff = await anilist.anime.getStaff(16498);
const relations = await anilist.anime.getRelations(16498);
const recommendations = await anilist.anime.getRecommendations(16498);

console.log(characters.Media?.characters?.edges?.[0]?.node?.name?.full);
console.log(staff.Media?.staff?.edges?.[0]?.node?.name?.full);
console.log(relations.Media?.relations?.edges?.[0]?.relationType);
console.log(recommendations.Media?.recommendations?.edges?.[0]?.node?.rating);
```

## Favorites

`toggleFavorite` mutates the authenticated viewer's favorites.
`toggleFavourite` remains available as a backwards-compatible alias.

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

await anilist.anime.toggleFavorite(16498);
```

```typescript
const { favorites } = await anilist.anime.toggleFavorite(16498, {
	select: { favorites: { anime: { nodes: { id: true } } } },
});
```
