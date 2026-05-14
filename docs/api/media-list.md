# MediaListService

Access media list entry workflows through `anilist.mediaList`.

Use this service when you need to read a specific list entry, read a user's list by media type, save progress, or delete an entry. For profile-oriented reads, `anilist.user` is often more convenient.

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getMediaList(id)` | Depends on entry privacy | `MediaList` |
| `getMediaListByUser(userId, mediaType)` | Depends on list privacy | `MediaListCollection` |
| `getMediaListByUsername(userName, mediaType)` | Depends on list privacy | `MediaListCollection` |
| `saveEntry(variables)` | Yes | `SaveMediaListEntry` |
| `deleteEntry(id)` | Yes | `DeleteMediaListEntry` |

`mediaType` is `"ANIME"` or `"MANGA"`.

## Read A List By Username

```typescript
const list = await anilist.mediaList.getMediaListByUsername(
	"example_user",
	"ANIME",
);

for (const group of list.MediaListCollection?.lists ?? []) {
	console.log(group?.name, group?.entries?.length ?? 0);
}
```

## Save Progress

```typescript
import { Anilist, MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

const saved = await anilist.mediaList.saveEntry({
	mediaId: 16498,
	status: MediaListStatus.Current,
	progress: 5,
	score: 8,
});

console.log(saved.SaveMediaListEntry?.id);
```

`saveEntry` accepts `SaveMediaListEntryInput`. Only `mediaId` is required:

| Field | Description |
| --- | --- |
| `mediaId` | AniList media ID to create or update |
| `status` | `MediaListStatus` enum value |
| `score` | User score |
| `progress` | Episode or chapter progress |
| `progressVolumes` | Volume progress for manga |
| `repeat` | Rewatch or reread count |
| `private` | Whether the entry is private |
| `notes` | User notes |
| `startedAt` | `{ year, month, day }` |
| `completedAt` | `{ year, month, day }` |

## Delete An Entry

Use the media list entry ID, not the anime or manga media ID.

```typescript
const deleted = await anilist.mediaList.deleteEntry(123456);

console.log(deleted.DeleteMediaListEntry?.deleted);
```
