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
| `getAnimeByTitle(title)` | No | `Page.media` |
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

## Pagination Defaults

| Method | `page` default | `perPage` default |
| --- | --- | --- |
| `getAnimeBySearch` | `1` | `10` |
| `getTrendingAnime` | `1` | `10` |
| `getPopularAnime` | `1` | `10` |
| `getAnimeListByGenre` | `1` | `10` |

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
