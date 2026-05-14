# MediaService

Access generic anime or manga workflows through `anilist.media`.

Use this service when code should work with either media type. Use `anilist.anime` or `anilist.manga` when you want domain-specific helpers.

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getMediaById(id)` | No | `Media` |
| `getMediaList(userId, mediaType)` | Depends on list privacy | `MediaListCollection` |
| `getMediaListByUsername(userName, mediaType)` | Depends on list privacy | `MediaListCollection` |

`mediaType` is `"ANIME"` or `"MANGA"`.

## Lookup Any Media

```typescript
const media = await anilist.media.getMediaById(16498);

console.log(media.Media?.type);
console.log(media.Media?.title?.userPreferred);
```

## Read A User List

```typescript
const animeList = await anilist.media.getMediaListByUsername(
	"example_user",
	"ANIME",
);

for (const group of animeList.MediaListCollection?.lists ?? []) {
	console.log(group?.name, group?.entries?.length ?? 0);
}
```
