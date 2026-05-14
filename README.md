# AniList Wrapper

A type-safe TypeScript client for the [AniList GraphQL API](https://docs.anilist.co). Use the convenience services for common anime, manga, character, staff, user, and list workflows, or drop down to raw GraphQL when AniList exposes something the wrapper does not cover yet.

[![npm version](https://img.shields.io/npm/v/@api-wrappers/anilist-wrapper)](https://www.npmjs.com/package/@api-wrappers/anilist-wrapper)
[![license](https://img.shields.io/npm/l/@api-wrappers/anilist-wrapper)](https://github.com/api-wrappers/anilist-wrapper/blob/master/LICENSE)
[![build status](https://github.com/api-wrappers/anilist-wrapper/actions/workflows/ci.yml/badge.svg)](https://github.com/api-wrappers/anilist-wrapper/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@api-wrappers/anilist-wrapper)](https://bundlephobia.com/package/@api-wrappers/anilist-wrapper)

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

## First Query

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

const { Media } = await anilist.anime.getAnimeById(16498);

console.log(Media?.title?.userPreferred);
console.log(Media?.siteUrl);
```

Most read-only methods do not need a token. Create an authenticated client only when you need private user data or mutations:

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

## Common Workflows

### Search anime

```typescript
const results = await anilist.anime.getAnimeBySearch("Frieren", 1, 5);

for (const media of results.Page?.media ?? []) {
	console.log(media?.title?.userPreferred, media?.startDate?.year);
}
```

### Get trending manga

```typescript
const trending = await anilist.manga.getMangaTrending(1, 10);

const titles = trending.Page?.media
	?.map((media) => media?.title?.userPreferred)
	.filter(Boolean);

console.log(titles);
```

### Read a public user list

```typescript
const list = await anilist.user.getUserAnimeListByUsername("example_user");

for (const group of list.MediaListCollection?.lists ?? []) {
	console.log(group?.name, group?.entries?.length ?? 0);
}
```

### Update the authenticated user's list

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

const saved = await anilist.mediaList.saveEntry({
	mediaId: 16498,
	status: MediaListStatus.Current,
	progress: 1,
	score: 8,
});

console.log(saved.SaveMediaListEntry?.id);
```

### Use raw GraphQL

```typescript
import { Anilist, gql } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

const data = await anilist.graphql.request<{
	GenreCollection: Array<string | null> | null;
}>(gql`
	query Genres {
		GenreCollection
	}
`);

console.log(data.GenreCollection);
```

## Services

| Property | Use it for |
| --- | --- |
| `anilist.anime` | Anime lookup, search, trending, popular, genre, relations, characters, staff, recommendations, favorites |
| `anilist.manga` | Manga lookup, search, trending, popular, genre, relations, characters, staff, recommendations, favorites |
| `anilist.character` | Character lookup, birthdays, favorites |
| `anilist.staff` | Staff lookup, birthdays, favorites |
| `anilist.user` | User profiles, public lists by username, authenticated list/stat queries by user ID |
| `anilist.media` | Generic anime/manga media lookup and list access |
| `anilist.mediaList` | Media list entry lookup, save, and delete |
| `anilist.graphql` | Any AniList GraphQL query or mutation |

## Docs And Examples

- [Documentation home](docs/index.md)
- [Authentication guide](docs/authentication.md)
- [API reference](docs/api/anime.md)
- [Runnable examples](examples/README.md)

Run examples directly from this repo:

```bash
bun examples/basic-anime.ts
bun examples/manga-workflow.ts
bun examples/raw-graphql.ts
ANILIST_TOKEN=... ANILIST_USERNAME=... bun examples/authenticated-user.ts
```

## Development

```bash
bun install
bun test
bun run check
bun run build
```

## Contributing

Issues and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before contributing.

## License

MIT
