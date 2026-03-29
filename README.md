# AniList API Wrapper for TypeScript

A simple, type-safe TypeScript wrapper for the AniList API. Build awesome anime and manga apps without the hassle of dealing with raw GraphQL queries.

[![npm version](https://img.shields.io/npm/v/@api-wrappers/anilist-wrapper)](https://www.npmjs.com/package/@api-wrappers/anilist-wrapper)
[![license](https://img.shields.io/npm/l/@api-wrappers/anilist-wrapper)](https://github.com/api-wrappers/anilist-wrapper/blob/master/LICENSE)
[![build status](https://github.com/api-wrappers/anilist-wrapper/actions/workflows/ci.yml/badge.svg)](https://github.com/api-wrappers/anilist-wrapper/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@api-wrappers/anilist-wrapper)](https://bundlephobia.com/package/@api-wrappers/anilist-wrapper)

## What's this?

Ever wanted to build something cool with anime data but got stuck trying to figure out AniList's GraphQL API? This wrapper makes it dead simple. Just import, initialize, and start fetching data.

Built with TypeScript for that sweet autocomplete and type safety. No more guessing what properties are available on your anime objects!

## Quick Start

```bash
// npm
npm install @api-wrappers/anilist-wrapper

// bun
bun add @api-wrappers/anilist-wrapper

// yarn
yarn add @api-wrappers/anilist-wrapper

// pnpm
pnpm add @api-wrappers/anilist-wrapper
```

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

// Create an instance (no token needed for public data)
const anilist = new Anilist();

// Get info about Attack on Titan
const aot = await anilist.anime.getAnimeById(16498);
console.log(aot.title.english); // "Attack on Titan"

// Search for anime
const results = await anilist.anime.searchAnime("One Piece");
console.log(results.length); // Number of results found
```

## What can you do?

### Anime
- Get anime by ID or search by title
- Fetch characters, staff, and recommendations
- Get trending and popular anime
- Find anime by genre

### Manga
- Same features as anime, but for manga
- Search, get details, characters, staff, etc.

### Characters & Staff
- Get character info and birthdays
- Find staff members and their work
- Toggle favorites (with auth)

### Users
- Get user profiles and statistics
- Fetch user's anime/manga lists
- Requires authentication

### Media Lists
- Manage user's anime and manga lists
- Add, update, remove entries
- Requires authentication

## Authentication

Some features need you to be logged in. Get an access token from [AniList's auth guide](https://docs.anilist.co/guide/auth/) and pass it to the constructor:

```typescript
const anilist = new Anilist("your_access_token_here");
```

## Examples

### Get trending anime
```typescript
const trending = await anilist.anime.getAnimeTrending();
console.log(trending[0].title.english);
```

### Search for characters
```typescript
const characters = await anilist.character.getCharacterById(1);
console.log(characters.name.full);
```

### Get user's anime list
```typescript
const userList = await anilist.user.getUserAnimeList("username");
console.log(userList.length); // Number of anime in their list
```

### Find anime by genre
```typescript
const actionAnime = await anilist.anime.getAnimeListByGenre("Action");
console.log(actionAnime.length); // Number of action anime
```

## Contributing

Found a bug? Want to add a feature? Contributions are welcome! Check out the [contributing guide](CONTRIBUTING.md) to get started.

## License

MIT License - use it however you want!

## Support

Having trouble? Open an issue on [GitHub](https://github.com/api-wrappers/anilist-wrapper/issues) and I'll help you out.

---

# ❤️

<p align="center">
<a target="_blank" href="https://tdanks.com/mental-health/quote">
❤️ Quick reminder: <strong><i>you are great, you are enough, and we value your presence.</i></strong> If you're going through a tough time with your mental health, please reach out to someone you trust and consider talking to a professional. You're never alone. ❤️
</a>
</p>
