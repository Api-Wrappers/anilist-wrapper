# SocialService

Access follows, notifications, activities, forum threads, likes, and site data
through `anilist.social`.

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

## Methods

### Follows and notifications

| Method | Auth | Returns | `select` root |
| --- | --- | --- | --- |
| `getFollowing(userId, page?, perPage?)` | No | `Page.following` | `page` |
| `getFollowers(userId, page?, perPage?)` | No | `Page.followers` | `page` |
| `toggleFollow(userId)` | Yes | `ToggleFollow` | `user` |
| `getNotifications(page?, perPage?, options?)` | Yes | `Page.notifications` | None |

`getNotifications` does not reset the unread notification count. Pass
`{ resetNotificationCount: true }` as `options` to mark notifications as read.

### Activities

| Method | Auth | Returns | `select` root |
| --- | --- | --- | --- |
| `getActivities(userId?, page?, perPage?)` | No | `Page.activities` | None |
| `getActivity(id)` | No | `Activity` | None |
| `getActivityReplies(activityId?, page?, perPage?)` | No | `Page.activityReplies` | `page` |
| `getActivityReply(id)` | No | `ActivityReply` | `activityReply` |
| `saveTextActivity(input)` | Yes | `SaveTextActivity` | None |
| `saveMessageActivity(input)` | Yes | `SaveMessageActivity` | None |
| `saveActivityReply(input)` | Yes | `SaveActivityReply` | None |
| `deleteActivity(id)` | Yes | `DeleteActivity` | None |
| `deleteActivityReply(id)` | Yes | `DeleteActivityReply` | None |
| `toggleActivitySubscription(activityId, subscribe?)` | Yes | `ToggleActivitySubscription` | None |
| `toggleActivityPin(id, pinned?)` | Yes | `ToggleActivityPin` | None |

### Forum

| Method | Auth | Returns | `select` root |
| --- | --- | --- | --- |
| `getThreads(filters?, page?, perPage?)` | No | `Page.threads` | `page` |
| `getThread(id)` | No | `Thread` | `thread` |
| `getThreadComments(threadId?, page?, perPage?)` | No | `Page.threadComments` | `page` |
| `getThreadComment(id)` | No | `ThreadComment` | `threadComments` |
| `saveThread(input)` | Yes | `SaveThread` | None |
| `saveThreadComment(input)` | Yes | `SaveThreadComment` | None |
| `deleteThread(id)` | Yes | `DeleteThread` | None |
| `deleteThreadComment(id)` | Yes | `DeleteThreadComment` | None |
| `toggleThreadSubscription(threadId, subscribe?)` | Yes | `ToggleThreadSubscription` | None |

### Likes and site data

| Method | Auth | Returns | `select` root |
| --- | --- | --- | --- |
| `toggleLike(id, type)` | Yes | `ToggleLikeV2` | None |
| `getSiteStatistics()` | No | `SiteStatistics` | `siteStatistics` |
| `getMarkdown(markdown)` | No | `Markdown` | `markdown` |

Methods with no `select` root return union or interface types (activities,
notifications, and likeables), which the selection API does not support. Use
[`anilist.graphql.request`](./graphql.md) with inline fragments when you need
custom fields from those results.

## Followers

```typescript
const following = await anilist.social.getFollowing(1, 1, 25);

for (const user of following.Page?.following ?? []) {
	console.log(user?.name);
}

const { page } = await anilist.social.getFollowers(1, 1, 25, {
	select: {
		page: {
			pageInfo: { hasNextPage: true },
			followers: { id: true, name: true },
		},
	},
});

console.log(page?.followers?.length, page?.pageInfo?.hasNextPage);
```

## Post And Like An Activity

```typescript
import { LikeableType } from "@api-wrappers/anilist-wrapper";

const saved = await anilist.social.saveTextActivity({
	text: "Started watching Frieren.",
});

const activityId = saved.SaveTextActivity?.id;

if (activityId) {
	await anilist.social.toggleLike(activityId, LikeableType.Activity);
}
```

## Forum Threads

```typescript
const threads = await anilist.social.getThreads({ search: "Frieren" }, 1, 10);

for (const thread of threads.Page?.threads ?? []) {
	console.log(thread?.title, thread?.replyCount);
}
```
