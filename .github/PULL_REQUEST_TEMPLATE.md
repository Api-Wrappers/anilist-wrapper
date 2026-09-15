# Pull Request

## Summary

Describe what changed and why.

Fixes #

## Type Of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Generated type or GraphQL operation update
- [ ] Build, packaging, or maintenance change

## Verification

List the commands you ran:

- [ ] `bun install`
- [ ] `bun run check`
- [ ] `bun run typecheck`
- [ ] `bun test`
- [ ] `bun run build`
- [ ] `bun run verify`
- [ ] `bun run codegen` when GraphQL operations, fragments, or generated types changed

## API Stability

- [ ] Existing public methods and response shapes are preserved.
- [ ] New examples use methods that exist in `src/services/`.
- [ ] Authentication requirements are documented for private data or mutations.

## Generated GraphQL Types

- [ ] This PR does not change GraphQL operations, fragments, or generated types.
- [ ] This PR changes GraphQL output and includes the `bun run codegen` result.

## Changesets

- [ ] A changeset is included for user-facing changes (minor for features and
      fixes, major for breaking changes).
- [ ] This change is internal-only (CI, docs, tests, or maintenance) and does
      not need a changeset.

## Notes For Reviewers

Add risks, follow-up work, or context that would help review.
