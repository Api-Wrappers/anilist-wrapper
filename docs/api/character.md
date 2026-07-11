# CharacterService

Access character workflows through `anilist.character`.

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getCharacterById(id)` | No | `Character` |
| `getCharactersBirthdayToday(page?, perPage?)` | No | `Page.characters` |
| `toggleFavoriteCharacter(characterId)` | Yes | `ToggleFavourite` |

Selected calls use normalized roots: `character` for lookups, `page` for
birthday pagination, and `favorites` for favorite mutations. See the
[selection migration guide](../selection-migration.md).

## Lookup

```typescript
const character = await anilist.character.getCharacterById(1);

console.log(character.Character?.name?.full);
console.log(character.Character?.siteUrl);
```

```typescript
const { character: selectedCharacter } =
	await anilist.character.getCharacterById(1, {
		select: { character: { id: true, name: { full: true } } },
	});
```

## Birthdays

`getCharactersBirthdayToday` defaults to page `1` and `25` characters per page.

```typescript
const birthdays = await anilist.character.getCharactersBirthdayToday();

const names = birthdays.Page?.characters
	?.map((character) => character?.name?.full)
	.filter(Boolean);

console.log(names);
```

## Favorites

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

await anilist.character.toggleFavoriteCharacter(1);
```
