---
"@api-wrappers/anilist-wrapper": minor
---

Add social and forum read coverage with selection support where results are not union-typed: `social.getFollowing()`, `getFollowers()`, `getNotifications()`, `getActivities()`, `getActivity()`, `getActivityReplies()`, `getActivityReply()`, `getThreads()`, `getThread()`, `getThreadComments()`, `getThreadComment()`, `getSiteStatistics()`, `getMarkdown()`, `toggleFollow()`, and `toggleLike()`. Legacy direct selections are now marked deprecated in JSDoc and the migration guide, with removal planned for the next major release.
