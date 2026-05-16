# Practical Examples

These examples use the published package import. Inside this repository, the
runnable files in `examples/` import from `../src/index.ts` so they can run
against local source.

## Create An Unauthenticated Client

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();
```

Use this for public anime, manga, character, staff, and username-based user
queries.

## Create An Authenticated Client

```typescript
import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);
```

Use this for private user data, favorites, and media list mutations.

## Get Anime By ID

```typescript
const anime = await anilist.anime.getAnimeById(16498);

console.log(anime.Media?.title?.userPreferred);
console.log(anime.Media?.episodes);
```

## Search Anime

```typescript
const search = await anilist.anime.getAnimeBySearch("Fullmetal Alchemist", 1, 5);

for (const media of search.Page?.media ?? []) {
	console.log(media?.title?.userPreferred ?? "Untitled");
}
```

## Get Manga

```typescript
const manga = await anilist.manga.getMangaById(30013);

console.log(manga.Media?.title?.userPreferred);
console.log(manga.Media?.chapters);
```

## Get Character

```typescript
const character = await anilist.character.getCharacterById(1);

console.log(character.Character?.name?.full);
console.log(character.Character?.siteUrl);
```

## Get Staff

```typescript
const staff = await anilist.staff.getStaffById(95269);

console.log(staff.Staff?.name?.full);
console.log(staff.Staff?.primaryOccupations?.filter(Boolean).join(", "));
```

## Get A User Anime List

```typescript
import { MediaListStatus } from "@api-wrappers/anilist-wrapper";

const list = await anilist.user.getUserAnimeListByUsername(
	"example_user",
	MediaListStatus.Current,
);

for (const group of list.MediaListCollection?.lists ?? []) {
	console.log(group?.entries?.length ?? 0);
}
```

## Update A Media List Entry

```typescript
import { Anilist, MediaListStatus } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist(process.env.ANILIST_TOKEN);

const saved = await anilist.mediaList.saveEntry({
	mediaId: 16498,
	status: MediaListStatus.Current,
	progress: 3,
	score: 8,
});

console.log(saved.SaveMediaListEntry?.id);
```

`saveEntry` creates or updates the authenticated user's AniList entry for the
given media ID.

## Raw GraphQL Request

```typescript
import { Anilist, gql } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

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

console.log(data.Media?.title?.userPreferred);
```

## Run The Repository Examples

```bash
bun examples/basic-anime.ts
bun examples/manga-workflow.ts
bun examples/characters-and-staff.ts
bun examples/raw-graphql.ts
ANILIST_TOKEN=... ANILIST_USERNAME=... bun examples/authenticated-user.ts
```
