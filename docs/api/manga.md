# MangaService

Accessed via `anilist.manga`. All methods are public (no token required).

---

## Methods

### `getMangaById(id)`

Retrieves a single manga entry by its AniList ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The AniList manga ID |

```typescript
const manga = await anilist.manga.getMangaById(30013);
console.log(manga?.Media?.title?.english);
```

---

### `getMangaByTitle(title)`

Retrieves a manga by its exact or closest-matching title.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | `string` | Yes | The manga title to look up |

```typescript
const manga = await anilist.manga.getMangaByTitle("Berserk");
```

---

### `getMangaTrending(page, perPage)`

Retrieves currently trending manga.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | `number` | Yes | Page number |
| `perPage` | `number` | Yes | Results per page |

```typescript
const trending = await anilist.manga.getMangaTrending(1, 10);
```

---

### `getMangaPopular(page, perPage)`

Retrieves the most popular manga.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | `number` | Yes | Page number |
| `perPage` | `number` | Yes | Results per page |

```typescript
const popular = await anilist.manga.getMangaPopular(1, 10);
```

---

### `getMangaListByGenre(genre)`

Retrieves manga filtered by genre.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `genre` | `string` | Yes | Genre name (e.g. `"Action"`, `"Fantasy"`) |

```typescript
const fantasy = await anilist.manga.getMangaListByGenre("Fantasy");
```

---

### `getMangaRecommendations(mediaId)`

Retrieves manga recommendations based on a given manga.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The source manga's AniList ID |

```typescript
const recs = await anilist.manga.getMangaRecommendations(30013);
```

---

### `getMangaRelations(mediaId)`

Retrieves related media for a manga (sequels, prequels, adaptations, etc.).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The manga's AniList ID |

```typescript
const relations = await anilist.manga.getMangaRelations(30013);
```

---

### `getMangaCharacters(mediaId)`

Retrieves the character list for a manga.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The manga's AniList ID |

```typescript
const characters = await anilist.manga.getMangaCharacters(30013);
```

---

### `getMangaStaff(mediaId)`

Retrieves the staff list for a manga (authors, artists, etc.).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mediaId` | `number` | Yes | The manga's AniList ID |

```typescript
const staff = await anilist.manga.getMangaStaff(30013);
```
