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

Selected calls use normalized roots: `mediaList` for list entries and saves,
`mediaListCollection` for list collections, and `deleteMediaListEntry` for
deletes. See the [selection migration guide](../selection-migration.md).

## Read A List By Username

```typescript
const list = await anilist.mediaList.getMediaListByUsername(
	"example_user",
	"ANIME",
);

for (const group of list.MediaListCollection?.lists ?? []) {
	console.log(group?.entries?.length ?? 0);
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

```typescript
const { mediaList } = await anilist.mediaList.saveEntry(
	{ mediaId: 16498, status: MediaListStatus.Current, progress: 5 },
	{ select: { mediaList: { id: true, status: true, progress: true } } },
);
```

`saveEntry` accepts `SaveMediaListEntryInput`. Provide either `mediaId` when
creating/updating by media, or `id` when updating an existing list entry:

| Field | Description |
| --- | --- |
| `mediaId` | AniList media ID to create or update |
| `id` | Existing media-list entry ID to update |
| `status` | `MediaListStatus` enum value |
| `score` | User score |
| `scoreRaw` | Raw 100-point score |
| `progress` | Episode or chapter progress |
| `progressVolumes` | Volume progress for manga |
| `repeat` | Rewatch or reread count |
| `private` | Whether the entry is private |
| `notes` | User notes |
| `startedAt` | `{ year, month, day }` |
| `completedAt` | `{ year, month, day }` |
| `advancedScores` | Advanced scoring values |
| `customLists` | Custom list names containing the entry |
| `hiddenFromStatusLists` | Hide the entry from status lists |
| `priority` | Entry priority |

## Delete An Entry

Use the media list entry ID, not the anime or manga media ID.

```typescript
const deleted = await anilist.mediaList.deleteEntry(123456);

console.log(deleted.DeleteMediaListEntry?.deleted);
```

```typescript
const { deleteMediaListEntry } = await anilist.mediaList.deleteEntry(123456, {
	select: { deleteMediaListEntry: { deleted: true } },
});
```
