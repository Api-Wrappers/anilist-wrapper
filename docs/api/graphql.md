# GraphQLService

Accessed via `anilist.graphql`. Use this low-level service for AniList features that do not have a dedicated convenience method yet, including any current or future root query or mutation in the AniList GraphQL schema.

The package exports AniList schema types and enums directly, generated operation SDK members under `AniListOperations`, and `gql`.

---

## Methods

### `request(document, variables?, options?)`

Executes any AniList GraphQL query or mutation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `document` | `string` | Yes | GraphQL operation document |
| `variables` | `object` | No | Operation variables |
| `options.requestHeaders` | `Record<string, string>` | No | Extra headers for this request |
| `options.signal` | `AbortSignal` | No | Request cancellation signal |

```typescript
import { Anilist, gql } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

const genres = await anilist.graphql.request<{
	GenreCollection: Array<string | null> | null;
}>(
	gql`
		query Genres {
			GenreCollection
		}
	`,
);

console.log(genres.GenreCollection);
```

Authenticated mutations use the same `Anilist("token")` constructor as the convenience services.

```typescript
const anilist = new Anilist("your_access_token");

await anilist.graphql.request(
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
