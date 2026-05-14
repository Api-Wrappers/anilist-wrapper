/**
 * Manga workflow example.
 *
 * Run with:
 *   bun examples/manga-workflow.ts
 */
import { Anilist } from "../src/index.ts";

const anilist = new Anilist();

const titleOf = (
	media:
		| {
				title?: {
					userPreferred?: string | null;
					english?: string | null;
					romaji?: string | null;
				} | null;
		  }
		| null
		| undefined,
) => media?.title?.userPreferred ?? media?.title?.english ?? media?.title?.romaji;

const manga = await anilist.manga.getMangaById(30013);
console.log("Lookup by ID");
console.log(`- Title: ${titleOf(manga.Media)}`);
console.log(`- Chapters: ${manga.Media?.chapters ?? "unknown"}`);
console.log(`- URL: ${manga.Media?.siteUrl ?? "unknown"}`);

const search = await anilist.manga.getMangaBySearch("Witch Hat Atelier", 1, 5);
console.log("\nSearch results");

for (const media of search.Page?.media ?? []) {
	console.log(`- ${titleOf(media) ?? "Untitled"}`);
}

const trending = await anilist.manga.getMangaTrending(1, 5);
console.log("\nTrending manga");

for (const media of trending.Page?.media ?? []) {
	console.log(`- ${titleOf(media) ?? "Untitled"}`);
}

const relations = await anilist.manga.getMangaRelations(30013);
console.log("\nRelations");

for (const edge of relations.Media?.relations?.edges?.slice(0, 5) ?? []) {
	console.log(
		`- ${edge?.relationType ?? "RELATED"}: ${titleOf(edge?.node) ?? "Untitled"}`,
	);
}
