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

## Files

| File | What it demonstrates | Auth |
| --- | --- | --- |
| [`basic-anime.ts`](./basic-anime.ts) | Anime lookup, search, trending, genre filtering | No |
| [`manga-workflow.ts`](./manga-workflow.ts) | Manga lookup, search, trending, relations | No |
| [`characters-and-staff.ts`](./characters-and-staff.ts) | Character and staff lookup, birthday lists | No |
| [`raw-graphql.ts`](./raw-graphql.ts) | Typed raw GraphQL queries with and without variables | No |
| [`authenticated-user.ts`](./authenticated-user.ts) | Authenticated client setup and public username list/stat reads | Yes |

## Use The Published Package

Inside this repo, examples import from `../src/index.ts`. In your app, import from the package instead:

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";
```
