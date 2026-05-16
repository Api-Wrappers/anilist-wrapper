# Contributing To AniList Wrapper

Thanks for helping improve `@api-wrappers/anilist-wrapper`. This project keeps a
stable public API around AniList's GraphQL API, so good contributions are small,
typed, documented, and easy to verify.

## Before You Start

- Check existing issues and pull requests to avoid duplicate work.
- Open an issue first for new public methods, breaking changes, or larger API
  design changes.
- Keep existing method names and response shapes stable unless the change fixes
  a clear bug.
- Prefer Bun for local development because the package scripts are written for
  Bun.

## Setup

```bash
git clone https://github.com/your-username/anilist-wrapper.git
cd anilist-wrapper
bun install
```

Create a branch for your change:

```bash
git switch -c feat/short-description
```

## Project Scripts

These are the package scripts currently available in `package.json`:

| Command | Purpose |
| --- | --- |
| `bun run build` | Build ESM, CJS, and declaration output with `tsdown`. |
| `bun run changeset` | Create a Changesets entry for user-facing changes. |
| `bun test` | Run the Bun test suite. |
| `bun run typecheck` | Run TypeScript with `tsc --noEmit`. |
| `bun run check` | Run Biome checks. |
| `bun run check:write` | Apply safe Biome formatting and fixes. |
| `bun run check:unsafe` | Apply Biome fixes that may be unsafe; review the diff carefully. |
| `bun run verify` | Run check, typecheck, build, and a Bun pack dry-run. |
| `bun run version-packages` | Apply pending changesets to package versions and changelog files. |
| `bun run release` | Publish changed packages with Changesets. Maintainers run this through CI. |
| `bun run codegen` | Regenerate AniList GraphQL types and SDK files, then patch generated output. |
| `bun run codegen:patch` | Re-run only the generated SDK patch step. |

There is no `bun run lint` script. Use `bun run check`.

## Development Guidelines

- Keep strict TypeScript.
- Do not add `any`; prefer `unknown` or generated types.
- Prefer `Array<Type>` over `Type[]` in new or edited TypeScript.
- Prefer const functions when adding helpers.
- Keep Bun support and avoid Node-only runtime assumptions in examples or source.
- Add tests for behavior changes when the change can be tested without relying
  on unstable live API state.
- Update README or docs when changing public behavior, adding service methods,
  or changing examples.

## Generated GraphQL Types

Generated files live in `src/__generated__/` and are maintained from:

- `codegen.yml`
- GraphQL documents in `src/queries/`
- Shared fragments in `src/fragments/`
- AniList's remote GraphQL schema
- `scripts/patch-codegen.ts`

Run `bun run codegen` when you add or edit GraphQL operations, fragments, or
schema-driven generated types. The patch step adapts codegen output to the
package's `@api-wrappers/api-core` client and removes duplicate generated
declarations. Do not hand-edit generated files unless you are immediately
replacing those edits with a codegen or patch-script change.

## Validation Before Opening A Pull Request

Run the relevant checks locally:

```bash
bun install
bun run check
bun run typecheck
bun test
bun run build
bun run verify
```

`bun test` currently exercises the live AniList API, so network or upstream API
availability can affect it. `bun run verify` is kept to local checks and package
validation so it is safe to run before every pull request.

Run `bun run codegen` only when your change affects GraphQL operations,
fragments, or generated type output. Include generated file changes in the pull
request when codegen is required.

## Release Changes

For user-facing fixes, features, or documentation changes that should appear in
release notes, run:

```bash
bun run changeset
```

The release workflow opens or updates a Changesets version PR on `main`. When
that version PR is merged, CI validates the package, publishes to npm, and
creates GitHub release notes. Do not commit npm tokens or bump versions by hand
unless a maintainer asks for it.

## Pull Request Checklist

- The change preserves the existing public API unless the PR explicitly explains
  a bug fix or migration.
- New examples use real methods that exist in `src/services/`.
- Documentation and examples match the current package scripts.
- Tests or manual verification are listed in the PR description.
- Generated type updates are explained when `bun run codegen` was needed.

## Reporting Bugs

Use the bug report issue form and include:

- The package version.
- Your Bun, Node.js, and TypeScript versions.
- A minimal code sample.
- The expected behavior and actual behavior.
- Whether the issue is in a convenience service or `anilist.graphql.request`.

## Suggesting Features

Use the feature request issue form and include:

- The AniList GraphQL field, query, or mutation you want supported.
- A proposed wrapper method name and example usage.
- Whether raw GraphQL already works for your use case.
- Any backwards compatibility concerns.

## Code Of Conduct

Be respectful and constructive. This project follows the
[Code of Conduct](CODE_OF_CONDUCT.md).
