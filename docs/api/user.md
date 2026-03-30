# UserService

Accessed via `anilist.user`.

Methods that accept a numeric `userId` require authentication. Methods that accept a `userName` string work on public profiles without a token.

---

## Methods

### `getUserInfo(userId)`

Retrieves a user's profile by their AniList user ID.

> **Requires authentication.**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | `number` | Yes | The AniList user ID |

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
const user = await anilist.user.getUserInfo(12345);
console.log(user?.User?.name);
```

---

### `getUserInfoByUsername(userName)`

Retrieves a user's public profile by their username.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userName` | `string` | Yes | The AniList username |

```typescript
const user = await anilist.user.getUserInfoByUsername("someuser");
console.log(user?.User?.avatar?.large);
```

---

### `getUserAnimeList(userId, status?)`

Retrieves the anime list for a user by ID, filtered by list status.

> **Requires authentication.**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `userId` | `number` | — | The AniList user ID |
| `status` | `MediaListStatus` | `CURRENT` | Filter by list status |

**`MediaListStatus` values:** `CURRENT`, `PLANNING`, `COMPLETED`, `DROPPED`, `PAUSED`, `REPEATING`

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

// Currently watching
const watching = await anilist.user.getUserAnimeList(12345);

// Completed anime
const completed = await anilist.user.getUserAnimeList(12345, MediaListStatus.Completed);
```

---

### `getUserAnimeListByUsername(userName, status?)`

Retrieves the anime list for a user by username.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `userName` | `string` | — | The AniList username |
| `status` | `MediaListStatus` | `CURRENT` | Filter by list status |

```typescript
const list = await anilist.user.getUserAnimeListByUsername("someuser");
```

---

### `getUserMangaList(userId, status?)`

Retrieves the manga list for a user by ID, filtered by list status.

> **Requires authentication.**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `userId` | `number` | — | The AniList user ID |
| `status` | `MediaListStatus` | `CURRENT` | Filter by list status |

```typescript
const reading = await anilist.user.getUserMangaList(12345);
```

---

### `getUserMangaListByUsername(userName, status?)`

Retrieves the manga list for a user by username.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `userName` | `string` | — | The AniList username |
| `status` | `MediaListStatus` | `CURRENT` | Filter by list status |

```typescript
const list = await anilist.user.getUserMangaListByUsername("someuser");
```

---

### `getUserList(page?, perPage?)`

Retrieves a paginated list of AniList users.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `10` | Results per page |

```typescript
const users = await anilist.user.getUserList(1, 20);
```

---

### `getUserStatistics(userId)`

Retrieves watch/read statistics for a user by ID.

> **Requires authentication.**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | `number` | Yes | The AniList user ID |

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
const stats = await anilist.user.getUserStatistics(12345);
console.log(stats?.User?.statistics?.anime?.count);
```

---

### `getUserStatisticsByUsername(userName)`

Retrieves watch/read statistics for a user by username.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userName` | `string` | Yes | The AniList username |

```typescript
const stats = await anilist.user.getUserStatisticsByUsername("someuser");
console.log(stats?.User?.statistics?.manga?.chaptersRead);
```
