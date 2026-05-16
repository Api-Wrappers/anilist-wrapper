# Roadmap

This roadmap describes the direction for `@api-wrappers/anilist-wrapper`. It is
not a release promise, but it should make the package easier to evaluate and
contribute to.

## Principles

- Preserve the existing public API wherever possible.
- Keep the wrapper typed and generated from AniList GraphQL documents.
- Prefer small service additions over large abstractions.
- Keep raw GraphQL access available for anything not covered by a convenience
  method.
- Keep Bun support first-class.

## Current Focus

- Improve documentation for common anime, manga, character, staff, user, and
  media list workflows.
- Keep generated GraphQL types current with AniList schema and operation
  changes.
- Add practical examples that are easy to run locally.
- Make issue and pull request templates collect enough detail for maintainers to
  reproduce problems quickly.

## Planned Improvements

- Expand API reference coverage for media list mutations and authenticated
  workflows.
- Add more examples for dashboards, importers, and recommendation apps.
- Review service method naming for consistency while avoiding breaking changes.
- Add focused tests around request construction and service method variables.
- Improve generated type maintenance notes when codegen or AniList schema
  behavior changes.

## Good First Contributions

Start with [docs/contributing-ideas.md](docs/contributing-ideas.md) for
beginner-friendly issues. Documentation fixes, example improvements, small test
coverage additions, and API reference clarifications are especially welcome.

## Not Planned

- Replacing AniList's GraphQL response shape with custom model classes.
- Removing the raw GraphQL escape hatch.
- Adding breaking service method renames without a migration path.
