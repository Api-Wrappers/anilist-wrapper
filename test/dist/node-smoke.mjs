import assert from "node:assert/strict";
import * as anilist from "../../dist/index.mjs";

const expectedExports = [
	"Anilist",
	"AniList",
	"createClient",
	"createClientBundle",
	"createGraphQLClient",
	"createHttpClient",
	"createSdkClient",
	"gql",
	"paginate",
	"collectPages",
	"assertPositiveInt",
	"normalizePerPage",
	"ANILIST_MAX_PER_PAGE",
	"ApiError",
	"GraphQLRequestError",
	"RateLimitError",
	"TimeoutError",
	"isApiError",
	"isGraphQLRequestError",
	"isRateLimitError",
	"isTimeoutError",
	"createRateLimitPlugin",
];

for (const name of expectedExports) {
	assert.ok(name in anilist, `missing dist export: ${name}`);
}

assert.equal(anilist.AniList, anilist.Anilist, "AniList must alias Anilist");
assert.equal(
	typeof anilist.gql`query { Viewer { id } }`,
	"string",
	"gql must return a document string",
);

const client = new anilist.Anilist();

for (const service of [
	"anime",
	"character",
	"graphql",
	"manga",
	"media",
	"mediaList",
	"social",
	"staff",
	"studio",
	"user",
]) {
	assert.ok(client[service], `missing service: ${service}`);
}

assert.equal(typeof client.anime.getAnimeById, "function");
assert.equal(typeof client.anime.getAnimeByTitle, "function");
assert.equal(typeof client.media.getGenres, "function");
assert.equal(typeof client.mediaList.updateEntries, "function");
assert.equal(typeof client.social.saveThread, "function");
assert.equal(typeof client.studio.toggleFavorite, "function");
assert.equal(typeof client.user.getViewer, "function");

await client.dispose();

console.log("ESM dist smoke test passed");
