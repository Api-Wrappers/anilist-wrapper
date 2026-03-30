/**
 * Authenticated user examples — requires an AniList access token.
 * Get one from: https://docs.anilist.co/guide/auth/
 *
 * Run with: ANILIST_TOKEN=your_token bun examples/authenticated-user.ts
 */
import { Anilist } from "../src/index.ts";

const token = process.env.ANILIST_TOKEN;
if (!token) {
  console.error("Set ANILIST_TOKEN environment variable first.");
  process.exit(1);
}

const username = process.env.ANILIST_USERNAME;
if (!username) {
  console.error("Set ANILIST_USERNAME environment variable first.");
  process.exit(1);
}

const anilist = new Anilist(token);

// Fetch the user's profile by username
const profile = await anilist.user.getUserInfoByUsername(username);
console.log("User:", profile?.User?.name);

// Get their current anime list
const list = await anilist.user.getUserAnimeListByUsername(username);
console.log("Anime list entries:", list?.MediaListCollection?.lists?.length);

// Get their statistics
const stats = await anilist.user.getUserStatisticsByUsername(username);
console.log("Anime watched:", stats?.User?.statistics?.anime?.count);
