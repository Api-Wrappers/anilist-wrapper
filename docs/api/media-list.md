# MediaListService

Accessed via `anilist.mediaList`. Provides lower-level access to AniList media list entries directly by list ID or user ID.

For most use cases, prefer [`UserService`](./user.md) (`anilist.user`) or [`MediaService`](./media.md) (`anilist.media`) which offer higher-level list access.

---

## Methods

### `getMediaList(id)`

Retrieves a media list entry by its list entry ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The media list entry ID |

```typescript
const entry = await anilist.mediaList.getMediaList(123456);
```

---

### `getMediaListByUser(userId, mediaType)`

Retrieves a user's full media list by their user ID, filtered by media type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | `number` | Yes | The AniList user ID |
| `mediaType` | `"ANIME" \| "MANGA"` | Yes | The type of media list |

```typescript
const animeList = await anilist.mediaList.getMediaListByUser(12345, "ANIME");
const mangaList = await anilist.mediaList.getMediaListByUser(12345, "MANGA");
```
