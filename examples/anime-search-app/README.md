# AniBoard: Real-World AniList Dashboard Example

This is a small but complete AniList-powered application built with Bun and the published `@api-wrappers/anilist-wrapper` package.

It is intentionally structured like an application rather than a one-call SDK demo. The browser talks only to the local Bun server; the server owns the AniList client and any access token.

## What It Demonstrates

### Public discovery flow

- determine the current anime season
- load seasonal anime with `getSeasonalAnime()`
- load trending anime with `getTrendingAnime()`
- load popular anime with `getPopularAnime()`
- search with server-side pagination using `getAnimeBySearch()`
- use field selection for list/card queries so the app does not request unnecessary fields

### Real media detail flow

- load a full title with `getAnimeById()`
- show cover and banner artwork, description, score, genres, format, episode count, airing information, rankings, tags, studios, characters, and external links
- load sequels, prequels, adaptations, and other related media with `getRelations()`

### Authenticated watchlist flow

When `ANILIST_TOKEN` and `ANILIST_USERNAME` are configured, the same app also:

- loads the user's real anime list with `mediaList.getMediaListByUsername()`
- adds an anime to the list with `mediaList.saveEntry()`
- changes status such as Planning, Current, Completed, Paused, or Dropped
- updates episode progress
- removes a list entry with `mediaList.deleteEntry()`

The access token never gets sent to the browser.

## Run In Discovery Mode

```bash
cd examples/anime-search-app
bun install
bun run start
```

Open `http://localhost:3000`.

Discovery, search, details, relations, characters, studios, and airing information work without authentication.

## Enable Real AniList List Management

Create an AniList access token, then start the example with the token and the matching username on the server:

```bash
ANILIST_TOKEN="your_token" \
ANILIST_USERNAME="your_username" \
bun run start
```

Do not put the token in `public/app.js`, browser storage, or client-side environment variables.

## App Structure

```text
anime-search-app/
├── package.json
├── server.ts
└── public/
    ├── index.html
    ├── app.js
    └── styles.css
```

`server.ts` is the integration layer. It owns the wrapper instance, turns SDK responses into small application payloads, keeps credentials private, and exposes routes consumed by the browser.

`public/app.js` is deliberately dependency-free so the example stays focused on the AniList integration. The same server routes can sit behind React, Next.js, Svelte, Vue, a mobile app, or another client.

## API Routes In The Example

| Route | Wrapper workflow |
| --- | --- |
| `GET /api/discover` | seasonal + trending + popular queries |
| `GET /api/search?q=...&page=...` | paginated anime search with field selection |
| `GET /api/anime/:id` | full anime detail + related media |
| `GET /api/library` | authenticated user's real AniList anime list |
| `PATCH /api/library/media/:mediaId` | create/update status and progress |
| `DELETE /api/library/entry/:entryId` | remove an AniList list entry |

## Why The Example Uses A Server

Public AniList reads can be made from many environments, but a real application should not expose an AniList access token to arbitrary browser code. Keeping the wrapper on the server gives the app one place for authentication, error handling, response shaping, and future caching or rate-limit handling.

That makes this example useful as a starting architecture rather than only as copy-paste syntax.
