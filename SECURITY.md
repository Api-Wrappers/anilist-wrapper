# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 2.x     | Yes       |
| < 2.0   | No        |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public GitHub issue.

Instead, report it privately via [GitHub's private vulnerability reporting](https://github.com/Api-Wrappers/anilist-wrapper/security/advisories/new).

Include:
- A description of the vulnerability
- Steps to reproduce
- Potential impact

We'll acknowledge your report within 48 hours and aim to release a fix within 7 days for critical issues.

## Notes

This wrapper communicates with the AniList API over HTTPS. Access tokens passed to the constructor are only sent to `graphql.anilist.co`. Never commit your access token to source control.
