# AnimeService

Accessed via `anilist.anime`. All methods are public (no token required) unless noted.

---

## Methods

### `getAnimeById(id)`

Retrieves a single anime entry by its AniList ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The AniList anime ID |

```typescript
const anime = await anilist.anime.getAnimeById(16498);
console.log(anime?.Media?.title?.english); // "Attack on Titan"
```

---

### `getAnimeByTitle(title)`

Retrieves an anime by its exact or closest-matching title.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | `string` | Yes | The anime title to look up |

```typescript
const anime = await anilist.anime.getAnimeByTitle("Cowboy Bebop");
console.log(anime?.Media?.id);
```

---

### `getAnimeBySearch(search, page?, perPage?)`

Searches for anime matching a title or keyword.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `search` | `string` | — | Search query |
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `10` | Results per page |

```typescript
const results = await anilist.anime.getAnimeBySearch("One Piece");
const titles = results?.Page?.media?.map((m) => m?.title?.romaji);
```

---

### `getTrendingAnime(page?, perPage?)`

Retrieves currently trending anime.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `10` | Results per page |

```typescript
const trending = await anilist.anime.getTrendingAnime();
```

---

### `getPopularAnime(page?, perPage?)`

Retrieves the most popular anime of all time.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `10` | Results per page |

```typescript
const popular = await anilist.anime.getPopularAnime(1, 20);
```

---

### `getAnimeListByGenre(genre, page?, perPage?)`

Retrieves anime filtered by genre.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `genre` | `string` | — | Genre name (e.g. `"Action"`, `"Romance"`) |
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `10` | Results per page |

```typescript
const action = await anilist.anime.getAnimeListByGenre("Action");
const mecha  = await anilist.anime.getAnimeListByGenre("Mecha", 1, 25);
```

---

### `getRecommendations(mediaId)`

Retrieves anime recommendations based on a given anime.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The source anime's AniList ID |

```typescript
const recs = await anilist.anime.getRecommendations(16498);
```

---

### `getRelations(mediaId)`

Retrieves related media for an anime (sequels, prequels, adaptations, etc.).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The anime's AniList ID |

```typescript
const relations = await anilist.anime.getRelations(16498);
```

---

### `getCharacters(mediaId)`

Retrieves the character list for an anime.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The anime's AniList ID |

```typescript
const characters = await anilist.anime.getCharacters(16498);
```

---

### `getStaff(mediaId)`

Retrieves the staff list for an anime (directors, composers, etc.).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The anime's AniList ID |

```typescript
const staff = await anilist.anime.getStaff(16498);
```
