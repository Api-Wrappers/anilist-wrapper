# AniList Wrapper Documentation

This documentation is written for building with the wrapper quickly, then reaching for the API reference when you need exact method names and response shapes.

## Start Here

1. [Install the package](#install)
2. [Create a client](#create-a-client)
3. [Choose a service](#choose-a-service)
4. [Run an example](#examples)

## Install

```bash
npm install @api-wrappers/anilist-wrapper
# or
bun add @api-wrappers/anilist-wrapper
# or
pnpm add @api-wrappers/anilist-wrapper
# or
yarn add @api-wrappers/anilist-wrapper
```

## Create A Client

Public AniList data does not need a token:

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

Authenticated reads and mutations use the same client with an access token:

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

Read the [authentication guide](./authentication.md) before using private user data, favorites, or list mutations.

## Read Response Shapes

The wrapper returns the typed AniList GraphQL response. That means the top-level field usually matches the operation:

```typescript
const anime = await anilist.anime.getAnimeById(16498);
console.log(anime.Media?.title?.userPreferred);

const search = await anilist.anime.getAnimeBySearch("Cowboy Bebop");
console.log(search.Page?.media?.[0]?.title?.userPreferred);

const list = await anilist.user.getUserAnimeListByUsername("example_user");
console.log(list.MediaListCollection?.lists?.[0]?.entries?.length);
```

Most fields are nullable because AniList marks many GraphQL fields as nullable. Prefer optional chaining or explicit null checks when rendering data.

## Choose A Service

| Service | Property | Best for |
| --- | --- | --- |
| Anime | `anilist.anime` | Anime details, search, trending, popular, genre filtering, relations, characters, staff, recommendations |
| Manga | `anilist.manga` | Manga details, search, trending, popular, genre filtering, relations, characters, staff, recommendations |
| Character | `anilist.character` | Character details, birthday lists, favorite mutations |
| Staff | `anilist.staff` | Staff details, birthday lists, favorite mutations |
| User | `anilist.user` | User profiles, statistics, anime lists, manga lists |
| Media | `anilist.media` | Generic anime or manga records by ID and list access by media type |
| Media List | `anilist.mediaList` | Media list entries, saving progress, deleting entries |
| GraphQL | `anilist.graphql` | Any AniList query or mutation |

## Common Patterns

### Pagination

List methods accept `page` and `perPage` arguments. Defaults are documented per method.

```typescript
const pageTwo = await anilist.anime.getTrendingAnime(2, 20);
```

### Media list statuses

Use the generated enum when filtering or saving list entries:

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const completed = await anilist.user.getUserAnimeListByUsername(
	"example_user",
	MediaListStatus.Completed,
);
```

### Raw GraphQL

Use raw GraphQL when AniList supports a field that does not have a convenience method yet.

```typescript
import { gql } from "@api-wrappers/anilist-wrapper";

const data = await anilist.graphql.request<{
	SiteStatistics: {
		users: { count: number | null } | null;
	} | null;
}>(gql`
	query SiteStats {
		SiteStatistics {
			users {
				count
			}
		}
	}
`);
```

## API Reference

- [Anime](./api/anime.md)
- [Manga](./api/manga.md)
- [Characters](./api/character.md)
- [Staff](./api/staff.md)
- [Users](./api/user.md)
- [Media](./api/media.md)
- [Media Lists](./api/media-list.md)
- [Raw GraphQL](./api/graphql.md)

## Examples

The [`examples/`](../examples/) directory contains runnable scripts:

```bash
bun examples/basic-anime.ts
bun examples/manga-workflow.ts
bun examples/characters-and-staff.ts
bun examples/raw-graphql.ts
ANILIST_TOKEN=... ANILIST_USERNAME=... bun examples/authenticated-user.ts
```
