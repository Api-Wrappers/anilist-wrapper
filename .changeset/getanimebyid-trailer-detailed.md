---
"@api-wrappers/anilist-wrapper": minor
---

`getAnimeById` now returns the full detailed media fields: `trailer`, `rankings`, `stats`, full `tags` (with `isGeneralSpoiler`, `isMediaSpoiler`, `isAdult`, `userId`), full `externalLinks` (with `language`, `color`, `icon`, `notes`, `isDisabled`), `reviews` count, and `recommendations` count. Previously it used `MediaBasicFragment`; it now uses `MediaDetailedFragment` which is the same fragment used by `AnimeFragment`.
