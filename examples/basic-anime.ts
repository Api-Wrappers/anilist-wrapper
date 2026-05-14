/**
 * Anime workflow example.
 *
 * Run with:
 *   bun examples/basic-anime.ts
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

const printTitles = (
	label: string,
	media: Array<Parameters<typeof titleOf>[0]> | null | undefined,
) => {
	console.log(`\n${label}`);

	for (const item of media?.slice(0, 5) ?? []) {
		console.log(`- ${titleOf(item) ?? "Untitled"}`);
	}
};

const anime = await anilist.anime.getAnimeById(16498);

console.log("Lookup by ID");
console.log(`- Title: ${titleOf(anime.Media)}`);
console.log(`- Episodes: ${anime.Media?.episodes ?? "unknown"}`);
console.log(`- URL: ${anime.Media?.siteUrl ?? "unknown"}`);

const search = await anilist.anime.getAnimeBySearch("Fullmetal Alchemist", 1, 5);
printTitles("Search results", search.Page?.media);

const trending = await anilist.anime.getTrendingAnime(1, 5);
printTitles("Trending now", trending.Page?.media);

const action = await anilist.anime.getAnimeListByGenre("Action", 1, 5);
printTitles("Action anime", action.Page?.media);
