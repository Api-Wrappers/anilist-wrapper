# MangaService

Access manga workflows through `anilist.manga`.

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getMangaById(id)` | No | `Media` |
| `getMangaByTitle(title)` | No | `Page.media` |
| `getMangaBySearch(search, page?, perPage?)` | No | `Page.media` |
| `getMangaTrending(page?, perPage?)` | No | `Page.media` |
| `getMangaPopular(page?, perPage?)` | No | `Page.media` |
| `getMangaListByGenre(genre, page?, perPage?)` | No | `Page.media` |
| `getMangaRecommendations(mediaId)` | No | `Media.recommendations` |
| `getMangaRelations(mediaId)` | No | `Media.relations` |
| `getMangaCharacters(mediaId)` | No | `Media.characters` |
| `getMangaStaff(mediaId)` | No | `Media.staff` |
| `toggleFavorite(mangaId)` | Yes | `ToggleFavourite` |
| `toggleFavourite(mangaId)` | Yes | `ToggleFavourite` |

Selected calls use normalized roots: `media` for manga detail/sub-resource
methods, `page` for paginated methods, and `favorites` for favorite mutations.
See the [selection migration guide](../selection-migration.md).

## Lookup And Search

```typescript
const berserk = await anilist.manga.getMangaByTitle("Berserk");
const firstMatch = berserk.Page?.media?.[0];

console.log(firstMatch?.id);
console.log(firstMatch?.title?.userPreferred);
```

```typescript
const search = await anilist.manga.getMangaBySearch("Witch Hat Atelier", 1, 5);

for (const media of search.Page?.media ?? []) {
	console.log(media?.title?.userPreferred, media?.chapters);
}
```

## Pagination Defaults

| Method | `page` default | `perPage` default |
| --- | --- | --- |
| `getMangaBySearch` | `1` | `10` |
| `getMangaTrending` | `1` | `20` |
| `getMangaPopular` | `1` | `20` |
| `getMangaListByGenre` | `1` | `10` |

## Genre, Relations, And Credits

```typescript
const fantasy = await anilist.manga.getMangaListByGenre("Fantasy");
const relations = await anilist.manga.getMangaRelations(30013);
const characters = await anilist.manga.getMangaCharacters(30013);
const staff = await anilist.manga.getMangaStaff(30013);

console.log(fantasy.Page?.media?.length);
console.log(relations.Media?.relations?.edges?.[0]?.relationType);
console.log(characters.Media?.characters?.edges?.[0]?.node?.name?.full);
console.log(staff.Media?.staff?.edges?.[0]?.node?.name?.full);
```

## Favorites

`toggleFavorite` mutates the authenticated viewer's favorites.
`toggleFavourite` remains available as a backwards-compatible alias.

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

await anilist.manga.toggleFavorite(30013);
```

```typescript
const { favorites } = await anilist.manga.toggleFavorite(30013, {
	select: { favorites: { manga: { nodes: { id: true } } } },
});
```
