/**
 * Basic anime examples — no authentication required.
 *
 * Run with: bun examples/basic-anime.ts
 */
import { Anilist } from "../src/index.ts";

const anilist = new Anilist();

// Look up an anime by its AniList ID
const aot = await anilist.anime.getAnimeById(16498);
console.log("Title:", aot?.Media?.title?.english); // "Attack on Titan"

// Search by name
const results = await anilist.anime.getAnimeBySearch("Fullmetal Alchemist");
const first = results?.Page?.media?.[0];
console.log("First result:", first?.title?.english);

// Trending anime
const trending = await anilist.anime.getTrendingAnime();
console.log(
  "Trending:",
  trending?.Page?.media?.map((m) => m?.title?.romaji).join(", "),
);

// Anime by genre
const action = await anilist.anime.getAnimeListByGenre("Action");
console.log("Action titles:", action?.Page?.media?.length, "results");
