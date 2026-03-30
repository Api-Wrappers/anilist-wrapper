# CharacterService

Accessed via `anilist.character`.

---

## Methods

### `getCharacterById(id)`

Retrieves a character by their AniList ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `number` | Yes | The AniList character ID |

```typescript
const character = await anilist.character.getCharacterById(1);
console.log(character?.Character?.name?.full);
```

---

### `getCharactersBirthdayToday(page?, perPage?)`

Retrieves characters whose birthday is today (based on the AniList calendar).

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | `number` | `1` | Page number |
| `perPage` | `number` | `25` | Results per page |

```typescript
const birthdays = await anilist.character.getCharactersBirthdayToday();
const names = birthdays?.Page?.characters?.map((c) => c?.name?.full);
```

---

### `toggleFavoriteCharacter(characterId)`

Toggles a character's favorite status for the authenticated user.

> **Requires authentication.** See the [Authentication guide](../authentication.md).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `characterId` | `number` | Yes | The AniList character ID |

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);
await anilist.character.toggleFavoriteCharacter(1);
```
