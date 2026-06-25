---
type: executor-prompt
title: Add AniList wrapper contract tests and API consistency guardrails
slug: api-wrapper-improvements
created: 2026-06-25
status: ready
target: src/client, src/services, tests, README/docs
related:
  - audit.html
---

# Task

Implement the first improvement phase for `@api-wrappers/anilist-wrapper`: add deterministic, non-network contract tests for the wrapper's service and client seams, then make only the smallest backwards-compatible API consistency improvements that those tests protect.

Do not redesign the package. Do not replace the generated SDK. Do not remove or rename existing public methods.

# Context

This is a TypeScript/Bun package for the AniList GraphQL API. `src/index.ts` exposes an `Anilist` class that creates a generated SDK client and service instances. `src/client/index.ts` creates the GraphQL transport over `@api-wrappers/api-core`, sets JSON/auth headers, retries 429 responses, forwards request headers and abort signals, and deduplicates repeated fragment definitions. `src/services/*.ts` mostly forward method arguments into generated SDK operations.

Current tests are mostly live AniList integration tests. They use one-second delays and skip rate-limit errors, so they do not reliably protect service variable mapping or transport behavior.

# Implementation Plan

1. Create a non-network service contract test harness.
   - Add focused Bun tests that instantiate service classes directly with a typed fake SDK.
   - The fake SDK should record the generated operation name and variables for each call and return a minimal resolved object.
   - Keep the fake local to tests unless there is an existing shared test pattern.

2. Cover high-risk service mappings first.
   - Test representative methods in `AnimeService`, `MangaService`, `UserService`, `MediaService`, and `MediaListService`.
   - Assert exact variables for IDs, search terms, page/perPage defaults, status defaults, media type conversion, and `saveEntry` mutation fields.
   - Preserve current runtime behavior, including current defaults, unless the test exposes an actual bug that must be fixed.

3. Add raw GraphQL service tests.
   - Instantiate `GraphQLService` with a fake `GraphQLClient`.
   - Assert that `document`, `variables`, `requestHeaders`, and `signal` are forwarded exactly.
   - Keep generic typing strict; do not use `any`.

4. Add client transport and fragment deduplication coverage.
   - Prefer testing through `createGraphQLClient` by mocking or intercepting `@api-wrappers/api-core` if Bun test tooling makes that straightforward.
   - If direct helper testing is the cleaner local pattern, expose a narrowly named internal helper only if it does not become part of the documented public API.
   - Cover optional bearer token header, JSON content type, retry config for 429, custom request headers, abort signal forwarding, duplicate fragment removal, nested braces, and malformed fragment definitions.

5. Separate deterministic tests from live smoke tests if useful.
   - Add or document a focused unit/contract test command if the repo needs one.
   - Do not delete the current live AniList tests unless maintainers explicitly choose a different CI strategy.
   - If `verify` is updated, make sure it still runs the right package-quality gates.

6. Add backwards-compatible naming aliases only where low risk.
   - Add preferred American-spelling aliases for anime/manga favorite mutations while keeping `toggleFavourite`.
   - Keep aliases as thin delegations so behavior stays identical.
   - Update docs to show the preferred spelling without hiding the existing method.

7. Normalize tiny duplicated helpers only when tests are in place.
   - If repeated media type conversion remains duplicated, add a small internal helper and update services to use it.
   - Do not introduce a broad base service class or generic registry.

8. Update public docs and examples.
   - Update `README.md`, relevant `docs/api/*.md`, and examples only for APIs actually added or clarified.
   - Keep raw GraphQL escape hatch messaging intact.
   - Add contributor guidance for deterministic tests if a new test split is introduced.

# Constraints

- Follow existing project patterns.
- Keep the change focused.
- Do not perform unrelated refactors.
- Preserve existing behavior unless explicitly changed by this plan.
- Reuse generated types, schemas, utilities, services, and existing scripts before creating new ones.
- Avoid adding dependencies unless clearly necessary.
- Do not edit generated files by hand.
- Do not remove the raw GraphQL escape hatch.
- Do not wrap AniList response shapes in custom model classes.

# TypeScript Rules

- Do not use `any`.
- Keep handwritten code strict.
- Prefer generated operation and schema types where they fit.
- Avoid unsafe casts in tests; if a fake must satisfy a generated SDK shape, narrow the fake to the methods under test as much as TypeScript allows.
- Keep aliases and helpers explicitly typed.

# Validation

Before finishing:

- Run `bun run check`.
- Run `bun run typecheck`.
- Run the focused Bun tests you added.
- Run `bun test --timeout 10000` if live network/rate limits permit.
- Run `bun run build`.
- Run `bun pm pack --dry-run`.
- Run `bun run verify` if the previous commands are stable in the local environment.
- Run `bun run codegen` only if GraphQL operation documents, fragments, or generated type behavior changed.

# Acceptance Criteria

- Deterministic non-network tests assert exact service operation variables for representative methods.
- Raw GraphQL service tests assert document, variables, headers, and signal forwarding.
- Client behavior has tests for auth headers, retry config, request forwarding, and fragment deduplication.
- Existing public method names still work.
- Preferred favorite-method aliases are added only if backwards compatible.
- Docs mention any preferred aliases or new test command.
- All relevant validation commands pass, or any live-network/rate-limit failure is clearly separated from deterministic test results.

# Final Response

When done, respond with:

1. Summary of changes
2. Files changed
3. Commands run
4. Tests/checks completed
5. Any blockers, assumptions, or follow-up recommendations
