# .ai

Machine-readable planning artifacts written by the **strategist** skill.
Each entry is a self-contained plan, audit, or investigation an agent can execute.

## How to consume
1. Read this manifest to find the relevant artifact.
2. Open its folder; read `plan.html` / `audit.html` / `investigation.html` for full context.
3. Hand `executor-prompt.md` to the implementing agent.

## Conventions
- Folders: `<type>/<YYYY-MM-DD>-<slug>/`
- Primary artifacts default to HTML; Markdown versions are optional.
- Every artifact has metadata (`type`, `status`, `target`).
- `status: superseded` means a newer artifact replaces it.

## Artifacts
<!-- newest first; one line per run -->
- 2026-06-25 · audit · [api-wrapper-improvements](audits/2026-06-25-api-wrapper-improvements/audit.html) — improve wrapper reliability, consistency, and ergonomics without a rewrite
