# Examples

These scripts run against the source files in this repo, so they are useful while developing the package.

## Run

```bash
bun examples/basic-anime.ts
bun examples/manga-workflow.ts
bun examples/characters-and-staff.ts
bun examples/raw-graphql.ts
```

Authenticated examples require an AniList access token:

```bash
ANILIST_TOKEN="your_token" ANILIST_USERNAME="your_username" bun examples/authenticated-user.ts
```

For a complete browser-facing example that uses the published package:

```bash
cd examples/anime-search-app
bun install
bun run start
```

Then open `http://localhost:3000`.

The dashboard works anonymously for discovery/search/details. Add `ANILIST_TOKEN` and `ANILIST_USERNAME` to enable real watchlist reads, status/progress updates, and entry deletion.

## Files

| File | What it demonstrates | Auth |
| --- | --- | --- |
| [`basic-anime.ts`](./basic-anime.ts) | Anime lookup, search, trending, genre filtering | No |
| [`manga-workflow.ts`](./manga-workflow.ts) | Manga lookup, search, trending, relations | No |
| [`characters-and-staff.ts`](./characters-and-staff.ts) | Character and staff lookup, birthday lists | No |
| [`raw-graphql.ts`](./raw-graphql.ts) | Typed raw GraphQL queries with and without variables | No |
| [`authenticated-user.ts`](./authenticated-user.ts) | Authenticated client setup and public username list/stat reads | Yes |
| [`anime-search-app/`](./anime-search-app/) | Full AniList dashboard: seasonal/trending/popular discovery, paginated search, rich details, relations, and optional authenticated watchlist management | Optional |

## Use The Published Package

Inside this repo, the script examples import from `../src/index.ts`. In your app, import from the package instead:

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";
```

The dashboard example already uses the published package so it models a consumer application rather than importing unreleased source files.
