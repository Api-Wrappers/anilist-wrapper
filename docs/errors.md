# Error Handling

The wrapper re-exports the typed error classes and guards from
`@api-wrappers/api-core`, so callers can narrow failures without depending on
that package directly.

## Error classes

| Error | Thrown when |
| --- | --- |
| `ApiError` | Any non-2xx HTTP response that is not a rate limit or timeout. |
| `RateLimitError` | HTTP 429 from AniList. Extends `ApiError`. |
| `TimeoutError` | A request exceeds `timeoutMs`. |
| `GraphQLRequestError` | HTTP 200 with a non-empty `errors` array. Extends `ApiError` and exposes `graphqlErrors`. |

## Type guards

```typescript
import {
	isApiError,
	isGraphQLRequestError,
	isRateLimitError,
	isTimeoutError,
} from "@api-wrappers/anilist-wrapper";
```

Each guard narrows `unknown` to the matching class. `isApiError` also matches
`RateLimitError` and `GraphQLRequestError` because both extend `ApiError`.

## Example

```typescript
import {
	Anilist,
	ApiError,
	GraphQLRequestError,
	RateLimitError,
	isRateLimitError,
	isTimeoutError,
} from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

try {
	const { media } = await anilist.anime.getAnimeById(16498, {
		select: { media: { id: true, title: { userPreferred: true } } },
	});
	console.log(media?.title?.userPreferred);
} catch (error) {
	if (isRateLimitError(error)) {
		// Back off before retrying; AniList also sends Retry-After.
		console.warn("Rate limited, retry later.");
	} else if (isTimeoutError(error)) {
		console.warn("Request timed out.");
	} else if (error instanceof GraphQLRequestError) {
		// The server returned GraphQL errors for an otherwise valid request.
		console.error(error.graphqlErrors.map((detail) => detail.message));
	} else if (error instanceof ApiError) {
		console.error(`AniList request failed with HTTP ${error.status}.`);
	} else {
		throw error;
	}
}
```

## Rate limits and retries

AniList documents a 90 requests/minute budget (temporarily lowered at times)
and may return HTTP 429 with `Retry-After`, `X-RateLimit-Remaining`, and
`X-RateLimit-Reset` headers.

The default client policy retries HTTP 429 up to four total attempts with
exponential backoff and respects `Retry-After`. See
[Client options](./client-options.md) for the default `retry` configuration
and for proactive throttling with `createRateLimitPlugin`.

## Raw GraphQL errors

`anilist.graphql.request(...)` throws the same typed errors. A GraphQL
response whose `errors` array is non-empty is surfaced as
`GraphQLRequestError` with the individual `graphqlErrors` entries attached.
