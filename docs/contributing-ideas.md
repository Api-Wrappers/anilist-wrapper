# Contributing Ideas

These are beginner-friendly ways to contribute without needing to understand the
entire wrapper at once.

1. Improve wording in README examples so new users can copy them more easily.
2. Add missing examples to `docs/api/` pages for existing service methods.
3. Expand deterministic tests that confirm service methods pass the correct variables to the SDK.
4. Add a runnable example for a simple anime tracker workflow.
5. Add a runnable example for a simple manga tracker workflow.
6. Improve authentication docs with clearer token safety notes.
7. Review nullable response fields in docs and add optional chaining examples.
8. Add API reference notes for methods that require authentication.
9. Add examples showing `MediaListStatus` filters for user anime and manga lists.
10. Add raw GraphQL examples for fields that do not have convenience methods yet.
11. Improve issue templates when maintainers need more reproduction details.
12. Review generated type maintenance docs after codegen dependency updates.
13. Add comments to complex tests where the test setup is hard to follow.
14. Check docs for method names that no longer match `src/services/`.
15. Add a small example showing how to read a user's public statistics.

Before starting a new service method, open an issue and link the relevant
AniList GraphQL query or mutation. Public API additions should preserve existing
method names and response shapes.
