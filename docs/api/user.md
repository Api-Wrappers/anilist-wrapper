# UserService

Access user profile, statistics, and list workflows through `anilist.user`.

Username methods read public profile data and usually work without a token. Numeric user ID methods are intended for authenticated access and may fail on private data without a token.

## Methods

| Method | Auth | Returns |
| --- | --- | --- |
| `getUserInfo(userId)` | Yes | `User` |
| `getUserInfoByUsername(userName)` | No | `User` |
| `getUserAnimeList(userId, status?)` | Yes | `MediaListCollection` |
| `getUserAnimeListByUsername(userName, status?)` | No | `MediaListCollection` |
| `getUserMangaList(userId, status?)` | Yes | `MediaListCollection` |
| `getUserMangaListByUsername(userName, status?)` | No | `MediaListCollection` |
| `getUserList(page?, perPage?)` | No | `Page.users` |
| `getUserStatistics(userId)` | Yes | `User.statistics` |
| `getUserStatisticsByUsername(userName)` | No | `User.statistics` |

Selected calls use normalized roots: `user` for profile/statistics methods,
`mediaListCollection` for anime and manga list methods, and `page` for
`getUserList`. See the [selection migration guide](../selection-migration.md).

## Public Profile

```typescript
const profile = await anilist.user.getUserInfoByUsername("example_user");

console.log(profile.User?.name);
console.log(profile.User?.avatar?.large);
```

## Public Lists

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const completed = await anilist.user.getUserAnimeListByUsername(
	"example_user",
	MediaListStatus.Completed,
);

for (const group of completed.MediaListCollection?.lists ?? []) {
	for (const entry of group?.entries ?? []) {
		console.log(entry?.media?.title?.userPreferred, entry?.score);
	}
}
```

When `status` is omitted, list methods default to `MediaListStatus.Current`.

## Statistics

```typescript
const stats = await anilist.user.getUserStatisticsByUsername("example_user");

console.log(stats.User?.statistics?.anime?.count);
console.log(stats.User?.statistics?.manga?.chaptersRead);
```

## Pagination

`getUserList(page?, perPage?)` defaults to page `1` and `10` users per page.

```typescript
const users = await anilist.user.getUserList(1, 20);

console.log(users.Page?.users?.map((user) => user?.name));
```

```typescript
const { user } = await anilist.user.getUserInfoByUsername("example_user", {
	select: { user: { id: true, name: true } },
});

const { mediaListCollection } =
	await anilist.user.getUserAnimeListByUsername("example_user", undefined, {
		select: {
			mediaListCollection: {
				lists: { entries: { id: true, media: { id: true } } },
			},
		},
	});
```
