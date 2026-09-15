# Client Options

`Anilist` and `createGraphQLClient` accept either a plain token string or an
options object. Both forms produce the same transport.

## Constructor forms

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

// Public client, package defaults.
const publicClient = new Anilist();

// Token shorthand.
const authenticated = new Anilist(process.env.ANILIST_TOKEN);

// Token provider (evaluated before every request).
const refreshing = new Anilist({
	token: async () => refreshAccessToken(),
});

// api-core overrides.
const configured = new Anilist({
	token: process.env.ANILIST_TOKEN,
	core: {
		baseUrl: "https://graphql.anilist.co",
		defaultHeaders: { "x-app-name": "my-anilist-app" },
		timeoutMs: 30_000,
		retry: { maxAttempts: 4, delayMs: 1000, retriableStatusCodes: [429] },
		plugins: [createRateLimitPlugin({ maxRequestsPerInterval: 90, intervalMs: 60_000 })],
	},
});
```

`createGraphQLClient`, `createHttpClient`, and `createClientBundle` accept the
same input. Use `createClientBundle` when you need the SDK client, the GraphQL
client, and the underlying HTTP client together:

```typescript
import { createClientBundle } from "@api-wrappers/anilist-wrapper";

const { sdkClient, graphQLClient, httpClient } = createClientBundle({
	token: "…",
});
```

## Options

| Option | Type | Default | Purpose |
| --- | --- | --- | --- |
| `token` | `string \| () => MaybePromise<string \| null \| undefined>` | unset | Static token or provider, sent as `Authorization: Bearer <token>`. |
| `core` | `ClientConfig` subset | package defaults | api-core overrides: `baseUrl`, `defaultHeaders`, `plugins`, `transport`, `fetch`, `timeoutMs`, `retry`, `logger`. |
| `httpClient` | `BaseHttpClient` | unset | Reuse an existing api-core client instead of constructing one. |

The default request headers include `Content-Type: application/json`, and the
default endpoint is `https://graphql.anilist.co`. When `httpClient` is provided
the other options are ignored.

## Retry behavior

The default retry policy is:

```typescript
const DEFAULT_RETRY = {
	maxAttempts: 4,
	delayMs: 1000,
	retriableStatusCodes: [429],
};
```

Retries use exponential backoff, and HTTP 429 responses respect AniList's
`Retry-After` header. Override it through `core.retry`:

```typescript
const anilist = new Anilist({
	core: {
		retry: { maxAttempts: 6, delayMs: 2000, retriableStatusCodes: [429, 500] },
	},
});
```

## Rate limiting

AniList documents a 90 requests/minute budget (temporarily lowered at times)
and can return HTTP 429 when it is exceeded. The default client retries 429
responses, and you can add proactive throttling with the api-core rate-limit
plugin:

```typescript
import { Anilist, createRateLimitPlugin } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist({
	token: process.env.ANILIST_TOKEN,
	core: {
		plugins: [
			createRateLimitPlugin({ maxRequestsPerInterval: 90, intervalMs: 60_000 }),
		],
	},
});
```

See [Error handling](./errors.md) for the error classes thrown when requests
fail.

## Custom transport

Pass `core.transport` to run requests through a non-default transport, which
is useful for tests, proxies, or runtimes without a global `fetch`:

```typescript
import { Anilist, type Transport } from "@api-wrappers/anilist-wrapper";

const transport: Transport = {
	async execute(ctx) {
		return fetch(ctx.url, {
			method: ctx.method,
			headers: ctx.headers,
			body: ctx.body,
		});
	},
};

const anilist = new Anilist({ core: { transport } });
```
