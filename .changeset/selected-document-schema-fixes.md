---
"@api-wrappers/anilist-wrapper": patch
---

Fix selected documents that AniList rejected: `social.getFollowers()` and `social.getFollowing()` now declare `$userId: Int!`. Page selections must now select the result field (for example `media`), because AniList rejects the unused filter variables in a `pageInfo`-only document and computes `pageInfo` from that field. Add `bun run test:documents`, which validates every selected document against AniList's live schema.
