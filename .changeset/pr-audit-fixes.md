---
"@api-wrappers/anilist-wrapper": minor
---

Fix and harden the new service surface before release:

- `media.getMediaList()`, `media.getMediaListByUsername()`, `mediaList.getMediaListByUser()`, and `mediaList.getMediaListByUsername()` now forward `status` on the default SDK path too, not only on selected queries.
- `social.getNotifications()` no longer resets the unread notification count as a side effect. Pass `{ resetNotificationCount: true }` to opt in.
- `social.toggleLike()` now requires the `LikeableType`, which AniList needs to resolve the ID.
- ID and `perPage` validation now covers the anime, manga, character, staff, studio, and social services, not only media, user, and media lists.
- `mediaList.updateEntries()` rejects an empty `ids` array, and `mediaList.saveEntry()` validates `id` and `mediaId`.
- `studio.getStudioBySearch()` validates page selections like the other search methods.
- `paginate()` and `collectPages()` validate `startPage` and `maxPages`.
