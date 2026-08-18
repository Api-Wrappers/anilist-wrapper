---
"@api-wrappers/anilist-wrapper": minor
---

Add a `StudioService` (`anilist.studio`) for querying studios directly: `getStudioById` for a single studio and `getStudioBySearch` for a paginated search. Both support the `select` API, and the new `StudioSelect`, `StudioPageSelect`, `SelectedStudio`, and `SelectedStudioPage` types are exported.
