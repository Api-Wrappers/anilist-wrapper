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

// Full options.
const configured = new Anilist({
	token: process.env.ANILIST_TOKEN,
	url: "https://graphql.anilist.co",
	headers: { "x-app-name": "my-anilist-app" },
	timeoutMs: 30_000,
	retry: { maxAttempts: 4, delayMs: 1000, retriableStatusCodes: [429] },
	plugins: [createRateLimitPlugin()],
});
```

`createGraphQLClient` accepts the same input:

```typescript
import { createGraphQLClient } from "@api-wrappers/anilist-wrapper";

const graphQLClient = createGraphQLClient({ token: "..." });
```

## Options

| Option | Type | Default | Purpose |
| --- | --- | --- | --- |
| `token` | `string` | unset | Sent as `Authorization: Bearer <token>`. |
| `url` | `string` | `https://graphql.anilist.co` | GraphQL endpoint. |
| `headers` | `Record<string, string>` | unset | Extra headers merged into every request. |
| `timeoutMs` | `number` | unset | Default request timeout. A value around `30000` is recommended. |
| `retry` | `RetryConfig` | 4 attempts, `delayMs: 1000`, retries `429` | Retry policy. |
| `plugins` | `ApiPlugin[]` | `[]` | api-core plugins, for example `createRateLimitPlugin()`. |
| `transport` | `Transport` | `fetch` transport | Custom transport for tests or non-fetch runtimes. |

The default request headers always include `Content-Type: application/json`.
When no timeout is provided, requests wait for the transport; setting
`timeoutMs` makes slow or stalled requests throw `TimeoutError`.

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
`Retry-After` header. Pass `retry` to change the attempt count or add status
codes:

```typescript
const anilist = new Anilist({
	retry: { maxAttempts: 6, delayMs: 2000, retriableStatusCodes: [429, 500] },
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
	plugins: [createRateLimitPlugin({ maxRequestsPerInterval: 90, intervalMs: 60_000 })],
});
```

See [Error handling](./errors.md) for the error classes thrown when requests
fail.

## Custom transport

Pass `transport` to run requests through a non-default transport, which is
useful for tests, proxies, or runtimes without a global `fetch`:

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

const anilist = new Anilist({ transport });
```
