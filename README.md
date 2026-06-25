<h1 align="center">@api-wrappers/anilist-wrapper</h1>

<p align="center">
  A typed TypeScript wrapper for the <a href="https://docs.anilist.co">AniList GraphQL API</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@api-wrappers/anilist-wrapper"><img alt="npm version" src="https://img.shields.io/npm/v/@api-wrappers/anilist-wrapper"></a>
  <a href="https://github.com/Api-Wrappers/anilist-wrapper/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/npm/l/@api-wrappers/anilist-wrapper"></a>
  <a href="https://github.com/Api-Wrappers/anilist-wrapper/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Api-Wrappers/anilist-wrapper/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://bundlephobia.com/package/@api-wrappers/anilist-wrapper"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@api-wrappers/anilist-wrapper"></a>
  <a href="https://github.com/Api-Wrappers/anilist-wrapper/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/api-wrappers/anilist-wrapper"></a>
</p>

`@api-wrappers/anilist-wrapper` is a typed AniList GraphQL wrapper for anime,
manga, characters, staff, users, media lists, and raw GraphQL escape hatches.
It gives TypeScript and Bun or Node.js apps dedicated services for common
AniList workflows while keeping direct GraphQL access available when AniList
supports a field the wrapper has not modeled yet.

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

## Quick Start

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
const anime = await anilist.anime.getAnimeById(16498);

console.log(anime.Media?.title?.userPreferred);
```

## Why Use This Instead Of Raw GraphQL?

- Typed services cover common AniList resources without repeating operation
  strings in every app.
- Generated GraphQL schema and operation types are exported from the package.
- The client sets the AniList endpoint, JSON headers, optional bearer auth, and
  retry behavior for AniList rate-limit responses.
- Shared fragments keep anime, manga, staff, character, user, and list response
  shapes consistent across convenience methods.
- The raw GraphQL service stays available for new AniList fields, one-off
  queries, or app-specific projections.

## Why Not Just Use graphql-request?

Use `graphql-request` or another generic GraphQL client if all you need is a
small transport layer and you want to own every query string yourself.

Use this wrapper when you want AniList-specific service methods, generated
operation types, documented examples, built-in auth header setup, and a stable
set of convenience APIs for anime, manga, characters, staff, users, and media
lists. You can still run custom operations through `anilist.graphql.request`.

## Practical Examples

### Create an unauthenticated client

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

Most public anime, manga, character, staff, and username-based user reads work
without a token.

### Create an authenticated client

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

Use an authenticated client for private user data, favorites, and media list
mutations.

Anime and manga favorite mutations use `toggleFavorite(...)`. The older
`toggleFavourite(...)` spelling remains available as a backwards-compatible
alias.

### Get anime by ID

```typescript
const anime = await anilist.anime.getAnimeById(16498);

console.log(anime.Media?.title?.userPreferred);
console.log(anime.Media?.siteUrl);
```

### Search anime

```typescript
const results = await anilist.anime.getAnimeBySearch("Frieren", 1, 5);

for (const media of results.Page?.media ?? []) {
	console.log(media?.title?.userPreferred, media?.startDate?.year);
}
```

### Get manga

```typescript
const manga = await anilist.manga.getMangaById(30013);

console.log(manga.Media?.title?.userPreferred);
console.log(manga.Media?.chapters);
```

### Get character

```typescript
const character = await anilist.character.getCharacterById(1);

console.log(character.Character?.name?.full);
console.log(character.Character?.siteUrl);
```

### Get staff

```typescript
const staff = await anilist.staff.getStaffById(95269);

console.log(staff.Staff?.name?.full);
console.log(staff.Staff?.primaryOccupations?.filter(Boolean).join(", "));
```

### Get a user anime list

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const list = await anilist.user.getUserAnimeListByUsername(
	"example_user",
	MediaListStatus.Current,
);

for (const group of list.MediaListCollection?.lists ?? []) {
	console.log(group?.entries?.length ?? 0);
}
```

### Update a media list entry

```typescript
import { Anilist, MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

const saved = await anilist.mediaList.saveEntry({
	mediaId: 16498,
	status: MediaListStatus.Current,
	progress: 1,
	score: 8,
});

console.log(saved.SaveMediaListEntry?.id);
```

`saveEntry` creates or updates the authenticated user's media list entry. AniList
requires a valid access token for this mutation.

### Raw GraphQL request

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

## Common App Use Cases

- Anime tracker: search anime, read details, and save watch progress.
- Manga tracker: search manga, inspect chapters or volumes, and update reading
  progress.
- User list importer: read public anime or manga lists by username and map list
  entries into your app.
- Recommendation app: combine media details, genres, tags, rankings, relations,
  and AniList recommendations.
- AniList dashboard: render user profile data, statistics, current lists, and
  quick links to AniList pages.

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

## Runtime Support

The package ships ESM, CommonJS, and TypeScript declaration output from
`dist/`. It is developed and tested with Bun, and it can be used from modern
Node.js runtimes that support the package `exports` field and `fetch`-compatible
HTTP behavior through `@api-wrappers/api-core`.

## Generated GraphQL Types

GraphQL schema and operation types are generated into `src/__generated__/` from
`codegen.yml`, the query documents in `src/queries/`, and the fragments in
`src/fragments/`. Do not edit generated files by hand.

Run `bun run codegen` when you add or change GraphQL operations, fragments, or
schema-driven types. The codegen step fetches the AniList schema, writes the
generated files, then runs `scripts/patch-codegen.ts` so the generated SDK uses
the package's `@api-wrappers/api-core` GraphQL client shape.

## Docs And Examples

- [Documentation home](docs/index.md)
- [Practical examples](docs/examples.md)
- [Authentication guide](docs/authentication.md)
- [API reference](docs/api/anime.md)
- [Runnable examples](examples/README.md)
- [Contribution ideas](docs/contributing-ideas.md)

Run examples directly from this repo:

```bash
bun examples/basic-anime.ts
bun examples/manga-workflow.ts
bun examples/characters-and-staff.ts
bun examples/raw-graphql.ts
ANILIST_TOKEN=... ANILIST_USERNAME=... bun examples/authenticated-user.ts
```

## Development

```bash
bun install
bun run check
bun run typecheck
bun run test
bun run build
bun run verify
```

`bun run test` runs deterministic non-network contract tests. Use
`bun run test:live` for the live AniList smoke tests, which can be affected by
network availability, upstream API state, and rate limits. `bun run verify` runs
the local checks, typecheck, build, and Bun pack dry-run.

Use `bun run codegen` only when GraphQL operations, fragments, or generated
types need to be refreshed.

## Release Process

Maintainers use Changesets for releases. Add a changeset for user-facing changes
with `bun run changeset`; merging the generated version PR on `main` publishes
to npm and creates GitHub release notes through the release workflow.

## Contributing

Issues and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md),
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before
contributing.

## License

MIT
