# Authentication

Most read-only AniList data is public. You only need a token for private user data and mutations, such as toggling favorites or saving media list progress.

## Get A Token

1. Open [AniList developer settings](https://anilist.co/settings/developer).
2. Create an API client.
3. Follow the [official AniList authentication guide](https://docs.anilist.co/guide/auth/) to complete OAuth and receive an access token.

For local scripts, store the token in an environment variable:

```bash
export ANILIST_TOKEN="your_access_token"
```

## Pass The Token

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

The wrapper sends `Authorization: Bearer <token>` automatically on every request made through that client.

## Public Vs Authenticated Methods

Methods that read public records by username or media ID usually work without a token. Methods that read private user data by numeric user ID or mutate the viewer's account need a token.

| Service | Method | Auth required |
| --- | --- | --- |
| `anime` | `toggleFavourite(animeId)` | Yes |
| `manga` | `toggleFavourite(mangaId)` | Yes |
| `character` | `toggleFavoriteCharacter(characterId)` | Yes |
| `staff` | `toggleFavoriteStaff(staffId)` | Yes |
| `mediaList` | `saveEntry(variables)` | Yes |
| `mediaList` | `deleteEntry(id)` | Yes |
| `user` | `getUserInfo(userId)` | Yes |
| `user` | `getUserAnimeList(userId, status?)` | Yes |
| `user` | `getUserMangaList(userId, status?)` | Yes |
| `user` | `getUserStatistics(userId)` | Yes |

Username-based user methods, such as `getUserInfoByUsername`, `getUserAnimeListByUsername`, and `getUserStatisticsByUsername`, read public profile data and can be used without a token.

## Save List Progress

```typescript
import { Anilist, MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

const saved = await anilist.mediaList.saveEntry({
	mediaId: 16498,
	status: MediaListStatus.Current,
	progress: 3,
	score: 8,
});

console.log(saved.SaveMediaListEntry?.id);
```

## Token Safety

- Do not commit tokens.
- Do not put tokens in frontend bundles.
- Use server-side routes for browser apps that need authenticated AniList actions.
- Treat AniList tokens like passwords because they can access or mutate account data.

See [SECURITY.md](../SECURITY.md) for vulnerability reporting.
