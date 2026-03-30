# MediaService

Accessed via `anilist.media`. A generic service for querying media entries (both anime and manga) and user media lists by type.

---

## Methods

### `getMediaById(id)`

Retrieves a media entry (anime or manga) by its AniList ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The AniList media ID |

```typescript
const media = await anilist.media.getMediaById(16498);
console.log(media?.Media?.type); // "ANIME" or "MANGA"
```

---

### `getMediaList(userId, mediaType)`

Retrieves a user's media list filtered by type, using their numeric user ID.

> **Requires authentication.**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | `number` | Yes | The AniList user ID |
| `mediaType` | `"ANIME" \| "MANGA"` | Yes | The type of media list |

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

const animeList = await anilist.media.getMediaList(12345, "ANIME");
const mangaList = await anilist.media.getMediaList(12345, "MANGA");
```

---

### `getMediaListByUsername(userName, mediaType)`

Retrieves a user's media list filtered by type, using their username.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userName` | `string` | Yes | The AniList username |
| `mediaType` | `"ANIME" \| "MANGA"` | Yes | The type of media list |

```typescript
const list = await anilist.media.getMediaListByUsername("someuser", "ANIME");
```
