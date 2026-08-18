# StudioService

Access studio workflows through `anilist.studio`.

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getStudioById(id)` | No | `Studio` |
| `getStudioBySearch(search, page?, perPage?)` | No | `Page.studios` |

Selected calls use normalized roots: `studio` for the lookup and `page` for
search pagination. See the [selection migration guide](../selection-migration.md).

## Lookup By ID

```typescript
const studio = await anilist.studio.getStudioById(21);

console.log(studio.Studio?.name);
console.log(studio.Studio?.isAnimationStudio);
console.log(studio.Studio?.siteUrl);
```

```typescript
const { studio } = await anilist.studio.getStudioById(21, {
	select: { studio: { id: true, name: true, favourites: true } },
});
```

## Search

`getStudioBySearch` keeps AniList's paginated `Page` shape, the same as the anime
and manga search methods. It defaults to page `1` with `10` results per page.

```typescript
const results = await anilist.studio.getStudioBySearch("Trigger", 1, 5);

const names = results.Page?.studios
	?.map((studio) => studio?.name)
	.filter(Boolean);

console.log(names);
```

AniList can return `null` at any level, including the `Page` itself and the
entries inside `studios`. Use optional chaining, and fall back to an empty array
before you loop, the way the example does with `?? []`:

```typescript
const { page } = await anilist.studio.getStudioBySearch("Trigger", 1, 5, {
	select: { page: { studios: { id: true, name: true } } },
});

for (const studio of page?.studios ?? []) {
	console.log(studio?.name);
}
```
