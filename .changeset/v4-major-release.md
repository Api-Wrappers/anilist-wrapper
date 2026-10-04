---
"@api-wrappers/anilist-wrapper": major
---

Release v4. See `docs/migrating-to-v4.md` for the upgrade steps.

**Breaking changes**

- Remove the v3 direct selections and bare page bodies that were deprecated in v3. `select` must be `{ <root>: { ... } }` (for example `{ media: { id: true } }`, which returns `{ media }`) or `{ page: { ... } }` on paginated methods. Other shapes throw a `TypeError` before a request is sent.
- Add `status` before `options` on `media.getMediaList()`, `media.getMediaListByUsername()`, `mediaList.getMediaListByUser()`, and `mediaList.getMediaListByUsername()`. Add `page` and `perPage` before `options` on `anime.getAnimeByTitle()` and `manga.getMangaByTitle()`, and `perPage` before `options` on `staff.getStaffBirthdayToday()`. Options passed in the old position throw a `TypeError` instead of being misread.
- Validate IDs, `perPage` (1 to 50), and `mediaType` (`"ANIME"` or `"MANGA"`) before sending requests. v3 mapped any `mediaType` other than `"ANIME"` to `"MANGA"`.
- Selected `browseAnime()` and `getSeasonalAnime()` now sort by popularity and exclude adult titles, and selected title lookups return one result by default, matching the unselected calls.
- Selected result types strip `undefined`, unwrap nested arrays, and type page results as `SelectedFields<Page, TSelect>`.
- Require Node.js 18 or newer.
