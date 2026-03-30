# AniList Wrapper — Documentation

A type-safe TypeScript wrapper for the [AniList GraphQL API](https://docs.anilist.co).

## Contents

- [Getting Started](#getting-started)
- [Authentication](./authentication.md)
- API Reference
  - [Anime](./api/anime.md)
  - [Manga](./api/manga.md)
  - [Characters](./api/character.md)
  - [Staff](./api/staff.md)
  - [Users](./api/user.md)
  - [Media](./api/media.md)
  - [Media Lists](./api/media-list.md)

---

## Getting Started

### Installation

```bash
# npm
npm install @api-wrappers/anilist-wrapper

# bun
bun add @api-wrappers/anilist-wrapper

# yarn
yarn add @api-wrappers/anilist-wrapper

# pnpm
pnpm add @api-wrappers/anilist-wrapper
```

### Basic usage

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(); // no token needed for public data

const aot = await anilist.anime.getAnimeById(16498);
console.log(aot?.Media?.title?.english); // "Attack on Titan"
```

### Authenticated usage

Some methods require an AniList access token. See the [Authentication guide](./authentication.md) for details.

```typescript
const anilist = new Anilist("your_access_token");
const viewer = await anilist.user.getUserInfo(12345);
```

---

## Client structure

The `Anilist` class exposes one property per service:

| Property | Service | Description |
|----------|---------|-------------|
| `anilist.anime` | `AnimeService` | Anime search, trending, details |
| `anilist.manga` | `MangaService` | Manga search, trending, details |
| `anilist.character` | `CharacterService` | Character lookup and favorites |
| `anilist.staff` | `StaffService` | Staff lookup and favorites |
| `anilist.user` | `UserService` | User profiles and lists |
| `anilist.media` | `MediaService` | Generic media queries |
| `anilist.mediaList` | `MediaListService` | Media list queries |

---

## Pagination

Methods that return lists accept optional `page` and `perPage` parameters. Both default to sensible values (page `1`, perPage `10` or `25` depending on the method).

```typescript
// Page 2, 20 results per page
const trending = await anilist.anime.getTrendingAnime(2, 20);
```

---

## Examples

See the [`examples/`](../examples/) directory for ready-to-run scripts.
