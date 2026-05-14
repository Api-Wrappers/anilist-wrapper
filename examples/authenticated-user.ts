/**
 * Authenticated user example.
 *
 * Get a token from:
 *   https://docs.anilist.co/guide/auth/
 *
 * Run with:
 *   ANILIST_TOKEN=your_token ANILIST_USERNAME=your_username bun examples/authenticated-user.ts
 */
import { Anilist, MediaListStatus } from "../src/index.ts";

const token = process.env.ANILIST_TOKEN;
const username = process.env.ANILIST_USERNAME;

if (!token || !username) {
	console.error(
		"Set ANILIST_TOKEN and ANILIST_USERNAME before running this example.",
	);
	process.exit(1);
}

const anilist = new Anilist(token);

const profile = await anilist.user.getUserInfoByUsername(username);
console.log("Profile");
console.log(`- Name: ${profile.User?.name ?? "unknown"}`);
console.log(`- URL: ${profile.User?.siteUrl ?? "unknown"}`);

const currentAnime = await anilist.user.getUserAnimeListByUsername(
	username,
	MediaListStatus.Current,
);

console.log("\nCurrent anime groups");
for (const group of currentAnime.MediaListCollection?.lists ?? []) {
	console.log(`- ${group?.name ?? "Unnamed"}: ${group?.entries?.length ?? 0}`);
}

const stats = await anilist.user.getUserStatisticsByUsername(username);
console.log("\nStatistics");
console.log(`- Anime watched: ${stats.User?.statistics?.anime?.count ?? 0}`);
console.log(`- Manga read: ${stats.User?.statistics?.manga?.count ?? 0}`);

console.log("\nAuthenticated mutations");
console.log("- Use anilist.mediaList.saveEntry(...) to save progress.");
console.log("- Use favorite toggle methods to mutate favorites.");
