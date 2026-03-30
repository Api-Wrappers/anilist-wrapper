# Authentication

Most read-only queries work without a token. Methods that access or mutate private user data — such as reading someone's private list, toggling favorites, or fetching the authenticated viewer — require an access token.

## Getting a token

1. Go to your [AniList developer settings](https://anilist.co/settings/developer) and create an API client.
2. Use the OAuth 2.0 implicit flow (or the authorization code flow for server apps) to obtain a `Bearer` token.
3. Full details are in the [official AniList auth guide](https://docs.anilist.co/guide/auth/).

## Passing the token

Pass the token as the first argument to the `Anilist` constructor:

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist("your_access_token_here");
```

The token is sent as an `Authorization: Bearer <token>` header on every request automatically.

## Security notes

- Never hard-code a token in source code. Use an environment variable:

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

- Tokens grant access to the user's private data. Treat them like passwords.
- See [SECURITY.md](../SECURITY.md) for reporting vulnerabilities.

## Methods that require authentication

| Service | Method |
|---------|--------|
| `user` | `getUserInfo(userId)` |
| `user` | `getUserAnimeList(userId, status?)` |
| `user` | `getUserMangaList(userId, status?)` |
| `user` | `getUserStatistics(userId)` |
| `character` | `toggleFavoriteCharacter(characterId)` |
| `staff` | `toggleFavoriteStaff(staffId)` |

Methods that accept a `userName` string instead of a numeric ID generally work without authentication, as they access public profile data.
