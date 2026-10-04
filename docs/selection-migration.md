# Selection Migration Guide

Selected queries use the same root-object shape across read endpoints and
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
| `studio` | `studio.getStudioById` |
| `user` | User profile, viewer, and user statistics methods |
| `mediaListCollection` | User/media list collection methods |
| `mediaList` | `mediaList.getMediaList` and `mediaList.saveEntry` |
| `mediaTagCollection` | `media.getMediaTags` |
| `airingSchedule` | `media.getAiringSchedule` |
| `review` | Review save/rate methods |
| `recommendation` | `media.saveRecommendation` |
| `favorites` | Anime, manga, character, staff, and studio favorite mutations |
| `viewer` / `viewerStatistics` | `user.getViewer` and `user.getViewerStatistics` |
| `thread` / `threadComments` | `social.getThread` and `social.getThreadComment` |
| `siteStatistics` | `social.getSiteStatistics` |
| `markdown` | `social.getMarkdown` |
| `deleteMediaListEntry` / `deleteCustomList` / `deleteReview` | Matching delete mutations |
| `updateMediaListEntries` | `mediaList.updateEntries` |

## Resolution Rules

Since v4, `select` must contain exactly one key: the root listed above for the
method (for example `{ media: { ... } }`). Paginated methods take exactly
`{ page: { ... } }`, where the page body may select `pageInfo` and the result
field (for example `{ page: { pageInfo: { ... }, media: { ... } } }`).

Any other shape throws a `TypeError` before a request is sent. The v3 direct
selections (`{ select: { id: true } }`) and bare page bodies
(`{ select: { pageInfo: { ... }, media: { ... } } }`) were removed. See
[Migrating to v4](./migrating-to-v4.md).

Because the root is always explicit, a field with the same name as the root is
unambiguous: `{ staff: { id: true, staff: { id: true } } }` selects the nested
`Staff.staff` field.

## Selection Depth Limits

The selection types recurse into object fields up to a depth of five levels,
which breaks circular AniList types (`Media` → `MediaConnection` →
`MediaEdge` → `Media`). At the limit, only scalar fields of the deepest object
remain selectable. Deeper projections should use `anilist.graphql.request`
with a hand-written document.

## Migrating v3 Direct Selections

Wrap the fields in the method's root. The result then uses the lowercase root
key instead of the GraphQL root field name.

| v3 | v4 |
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
