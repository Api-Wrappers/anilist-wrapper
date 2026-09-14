---
"@api-wrappers/anilist-wrapper": minor
---

Fix selection mapped types and export the typed error surface, client options, and transport types. `Anilist` and `createGraphQLClient` now accept an options object (endpoint, headers, timeout, retry, plugins, transport), `graphql.request` accepts typed documents, and package metadata ships `engines`, `sideEffects: false`, a `./package.json` export, and no `typescript` peer dependency.
