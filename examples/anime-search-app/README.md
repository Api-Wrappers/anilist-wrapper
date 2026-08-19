# AniList Search App Example

A small browser-facing example built with Bun and the published `@api-wrappers/anilist-wrapper` package.

It demonstrates a realistic flow rather than a single API call:

- accept a search query in the browser
- call AniList through the typed wrapper on the server
- select only the fields the UI needs
- return a small JSON payload
- render anime cards with cover art and AniList links

## Run It

```bash
cd examples/anime-search-app
bun install
bun run start
```

Open `http://localhost:3000` and search for an anime title.

No AniList access token is required because the example only uses public search data.

## Main Wrapper Call

The server uses field selection so the response only contains data needed by the page:

```ts
const response = await anilist.anime.getAnimeBySearch(query, 1, 12, {
  select: {
    page: {
      media: {
        id: true,
        title: {
          userPreferred: true,
          english: true,
          romaji: true,
        },
        coverImage: { large: true },
        seasonYear: true,
        episodes: true,
        format: true,
        siteUrl: true,
      },
    },
  },
});
```

The rest of the example is intentionally plain HTML and JavaScript so the wrapper usage is easy to spot and copy into another stack.

## Using It As A Starting Point

You can replace the built-in page with React, Next.js, Svelte, Vue, or another frontend while keeping the same server-side wrapper call. Useful next steps include pagination, media detail pages, genre filters, trending anime, and authenticated media-list actions.
