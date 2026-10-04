const assert = require("node:assert/strict");
const { Anilist, AniList, paginate, collectPages } = require("../../dist/index.cjs");

assert.equal(typeof Anilist, "function", "Anilist must be a constructor");
assert.equal(AniList, Anilist, "AniList must alias Anilist");
assert.equal(typeof paginate, "function", "paginate must be exported");
assert.equal(typeof collectPages, "function", "collectPages must be exported");

const client = new Anilist();

assert.equal(typeof client.anime.getAnimeById, "function");
assert.equal(typeof client.media.getGenres, "function");
assert.equal(typeof client.social.saveThread, "function");
assert.equal(typeof client.user.getViewer, "function");

void client.dispose();

console.log("CJS dist smoke test passed");
