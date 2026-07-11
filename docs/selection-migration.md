# Selection Migration Guide

Selected queries now use the same root-object shape across read endpoints and
mutations. The field selection still follows AniList's real GraphQL shape, but
the wrapper-level root is normalized to the service result you are asking for.

No-selection calls are unchanged and still return the generated SDK response
shape, such as `Media`, `Page`, `User`, `SaveMediaListEntry`, or
`DeleteMediaListEntry`.

## New Shape

Use a wrapper root under `select`:

```typescript
const { media } = await anilist.anime.getAnimeById(16498, {
	select: {
		media: {
			id: true,
			title: { userPreferred: true },
			startDate: { year: true },
		},
	},
});

console.log(media?.title?.userPreferred);
```

Paginated endpoints use `page`:

```typescript
const { page } = await anilist.anime.getAnimeBySearch("Frieren", 1, 10, {
	select: {
		page: {
			pageInfo: { currentPage: true, hasNextPage: true },
			media: { id: true, title: { userPreferred: true } },
		},
	},
});

console.log(page?.pageInfo?.hasNextPage);
```

Mutations use the mutated resource root:

```typescript
const { mediaList } = await anilist.mediaList.saveEntry(
	{ mediaId: 16498, status: MediaListStatus.Current },
	{
		select: {
			mediaList: {
				id: true,
				status: true,
				progress: true,
			},
		},
	},
);

const { deleteMediaListEntry } = await anilist.mediaList.deleteEntry(123456, {
	select: { deleteMediaListEntry: { deleted: true } },
});
```

## Root Map

| Root | Used by selected calls |
| --- | --- |
| `media` | Anime, manga, and generic media detail/sub-resource methods that select a `Media` object |
| `page` | Search, title lookup, trending/popular/browse, birthday, and user-list pagination methods |
| `character` | `character.getCharacterById` |
| `staff` | `staff.getStaffById` |
| `user` | User profile and user statistics methods |
| `mediaListCollection` | User/media list collection methods |
| `mediaList` | `mediaList.getMediaList` and `mediaList.saveEntry` |
| `favorites` | Anime, manga, character, and staff favorite mutations |
| `deleteMediaListEntry` | `mediaList.deleteEntry` |

## Old Shape Compatibility

The previous direct selection shape is still accepted for compatibility:

```typescript
const legacy = await anilist.anime.getAnimeById(16498, {
	select: { id: true, title: { userPreferred: true } },
});

console.log(legacy.Media?.id);
```

Prefer the new root-object shape for new code because selected calls then return
the same lowercase root names across endpoint families.

## Common Migrations

| Before | After |
| --- | --- |
| `{ select: { id: true } }` returns `{ Media }` | `{ select: { media: { id: true } } }` returns `{ media }` |
| `{ select: { lists: { entries: { id: true } } } }` returns `{ MediaListCollection }` | `{ select: { mediaListCollection: { lists: { entries: { id: true } } } } }` returns `{ mediaListCollection }` |
| `{ select: { anime: { nodes: { id: true } } } }` returns `{ ToggleFavourite }` | `{ select: { favorites: { anime: { nodes: { id: true } } } } }` returns `{ favorites }` |
| `{ select: { id: true, progress: true } }` on `saveEntry` returns `{ SaveMediaListEntry }` | `{ select: { mediaList: { id: true, progress: true } } }` returns `{ mediaList }` |
| `{ select: { deleted: true } }` returns `{ DeleteMediaListEntry }` | `{ select: { deleteMediaListEntry: { deleted: true } } }` returns `{ deleteMediaListEntry }` |

## Generated Schema Coverage

`MediaSelect` and `PageInfoSelect` are derived from the generated AniList schema
types. After refreshing generated types with `bun run codegen`, newly generated
fields become selectable without adding runtime allowlists.
