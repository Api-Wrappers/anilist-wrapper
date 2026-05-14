# GraphQLService

Access raw AniList GraphQL through `anilist.graphql`.

Use this service for current or future AniList operations that do not have a convenience method in the wrapper. The package also exports `gql`, generated AniList schema types and enums, and generated operation SDK members under `AniListOperations`.

## `request(document, variables?, options?)`

| Parameter | Type | Description |
| --- | --- | --- |
| `document` | `string` | GraphQL query or mutation document |
| `variables` | `object` | Optional operation variables |
| `options.requestHeaders` | `Record<string, string>` | Extra headers for this request |
| `options.signal` | `AbortSignal` | Request cancellation signal |

## Query

```typescript
import { Anilist, gql } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

const data = await anilist.graphql.request<{
	GenreCollection: Array<string | null> | null;
}>(gql`
	query Genres {
		GenreCollection
	}
`);

console.log(data.GenreCollection);
```

## Variables

```typescript
const data = await anilist.graphql.request<
	{
		Media: {
			id: number;
			title: { userPreferred: string | null } | null;
		} | null;
	},
	{ id: number }
>(
	gql`
		query MediaById($id: Int) {
			Media(id: $id) {
				id
				title {
					userPreferred
				}
			}
		}
	`,
	{ id: 16498 },
);
```

## Authenticated Mutation

Authenticated raw GraphQL uses the same token-based constructor as the convenience services.

```typescript
const anilist = new Anilist(process.env.ANILIST_TOKEN);

await anilist.graphql.request<unknown, { userId: number }>(
	gql`
		mutation ToggleFollow($userId: Int) {
			ToggleFollow(userId: $userId) {
				id
				name
			}
		}
	`,
	{ userId: 12345 },
);
```

## Request Cancellation

```typescript
const controller = new AbortController();

const promise = anilist.graphql.request(
	gql`
		query Genres {
			GenreCollection
		}
	`,
	undefined,
	{ signal: controller.signal },
);

controller.abort();
await promise;
```
