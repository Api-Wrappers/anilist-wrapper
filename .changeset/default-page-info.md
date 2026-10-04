---
"@api-wrappers/anilist-wrapper": minor
---

Return `pageInfo { hasNextPage currentPage }` from every default page query (search, title lookup, trending, popular, birthdays, and the user list), so `paginate()` and `collectPages()` work without a custom selection. `new Anilist(token)` now accepts `string | undefined`, so `new Anilist(process.env.ANILIST_TOKEN)` compiles and creates an unauthenticated client when the variable is unset. Document the social service, the remaining media, user, studio, and anime methods, and fix the custom transport example to JSON-encode request bodies.
