import { Anilist } from "@api-wrappers/anilist-wrapper";

const anilist = new Anilist();

const page = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AniList Search Example</title>
  <style>
    :root {
      color-scheme: dark;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #0b1020;
      color: #eef2ff;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(circle at top, rgba(92, 115, 255, 0.18), transparent 34rem),
        #0b1020;
    }

    main {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
      padding: 64px 0 80px;
    }

    .eyebrow {
      color: #9cabff;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    h1 {
      margin: 10px 0 12px;
      max-width: 760px;
      font-size: clamp(2.3rem, 7vw, 4.6rem);
      line-height: 0.98;
      letter-spacing: -0.055em;
    }

    .intro {
      max-width: 690px;
      margin: 0 0 28px;
      color: #aeb7cf;
      font-size: 1.05rem;
      line-height: 1.65;
    }

    code {
      color: #cbd3ff;
      background: rgba(255, 255, 255, 0.06);
      padding: 2px 6px;
      border-radius: 6px;
    }

    form {
      display: flex;
      gap: 10px;
      max-width: 720px;
      margin-bottom: 24px;
    }

    input {
      flex: 1;
      min-width: 0;
      border: 1px solid #2a3552;
      border-radius: 12px;
      background: #11182a;
      color: #fff;
      padding: 14px 16px;
      font: inherit;
      outline: none;
    }

    input:focus { border-color: #7183ff; }

    button {
      border: 0;
      border-radius: 12px;
      padding: 0 20px;
      background: #6577ff;
      color: #fff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }

    button:disabled { opacity: 0.55; cursor: progress; }

    .status {
      min-height: 24px;
      margin-bottom: 18px;
      color: #9aa5bf;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      gap: 18px;
    }

    .card {
      overflow: hidden;
      border: 1px solid #202a42;
      border-radius: 16px;
      background: #11182a;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
    }

    .poster {
      width: 100%;
      aspect-ratio: 2 / 3;
      object-fit: cover;
      display: block;
      background: #192139;
    }

    .card-body { padding: 13px; }

    .title {
      margin: 0;
      font-size: 0.98rem;
      line-height: 1.35;
    }

    .meta {
      margin: 7px 0 12px;
      min-height: 20px;
      color: #8f9bb8;
      font-size: 0.82rem;
    }

    .link {
      color: #aeb8ff;
      font-size: 0.84rem;
      text-decoration: none;
    }

    .link:hover { text-decoration: underline; }

    @media (max-width: 600px) {
      main { padding-top: 40px; }
      form { flex-direction: column; }
      button { min-height: 48px; }
    }
  </style>
</head>
<body>
  <main>
    <div class="eyebrow">Api-Wrappers example</div>
    <h1>Search AniList with a typed TypeScript SDK.</h1>
    <p class="intro">
      A small Bun app powered by <code>@api-wrappers/anilist-wrapper</code>.
      The server calls the typed AniList client and the browser renders the results.
    </p>

    <form id="search-form">
      <input id="query" name="query" value="Frieren" autocomplete="off" aria-label="Anime title" />
      <button id="submit" type="submit">Search</button>
    </form>

    <div id="status" class="status" aria-live="polite"></div>
    <section id="results" class="grid" aria-label="Search results"></section>
  </main>

  <script>
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#query");
    const button = document.querySelector("#submit");
    const status = document.querySelector("#status");
    const results = document.querySelector("#results");

    function render(items) {
      results.replaceChildren();

      for (const item of items) {
        const card = document.createElement("article");
        card.className = "card";

        if (item.coverImage) {
          const image = document.createElement("img");
          image.className = "poster";
          image.src = item.coverImage;
          image.alt = item.title + " cover";
          image.loading = "lazy";
          card.append(image);
        }

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h2");
        title.className = "title";
        title.textContent = item.title;

        const meta = document.createElement("p");
        meta.className = "meta";
        meta.textContent = [item.format, item.seasonYear, item.episodes ? item.episodes + " eps" : null]
          .filter(Boolean)
          .join(" · ");

        body.append(title, meta);

        if (item.siteUrl) {
          const link = document.createElement("a");
          link.className = "link";
          link.href = item.siteUrl;
          link.target = "_blank";
          link.rel = "noreferrer";
          link.textContent = "View on AniList";
          body.append(link);
        }

        card.append(body);
        results.append(card);
      }
    }

    async function search() {
      const query = input.value.trim();
      if (!query) return;

      button.disabled = true;
      status.textContent = "Searching AniList…";

      try {
        const response = await fetch("/api/search?q=" + encodeURIComponent(query));
        const payload = await response.json();

        if (!response.ok) throw new Error(payload.error || "Search failed");

        render(payload.results);
        status.textContent = payload.results.length
          ? "Found " + payload.results.length + " results for “" + query + "”."
          : "No results found for “" + query + "”.";
      } catch (error) {
        results.replaceChildren();
        status.textContent = error instanceof Error ? error.message : "Search failed";
      } finally {
        button.disabled = false;
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void search();
    });

    void search();
  </script>
</body>
</html>`;

const server = Bun.serve({
  port: Number(Bun.env.PORT ?? 3000),
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/search") {
      const query = url.searchParams.get("q")?.trim();

      if (!query) {
        return Response.json({ results: [] });
      }

      try {
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
                coverImage: {
                  large: true,
                },
                seasonYear: true,
                episodes: true,
                format: true,
                siteUrl: true,
              },
            },
          },
        });

        const results = (response.page?.media ?? []).flatMap((media) => {
          if (!media) return [];

          const title =
            media.title?.userPreferred ??
            media.title?.english ??
            media.title?.romaji ??
            "Untitled";

          return [
            {
              id: media.id,
              title,
              coverImage: media.coverImage?.large ?? null,
              seasonYear: media.seasonYear ?? null,
              episodes: media.episodes ?? null,
              format: media.format?.replaceAll("_", " ") ?? null,
              siteUrl: media.siteUrl ?? null,
            },
          ];
        });

        return Response.json({ results });
      } catch (error) {
        console.error(error);
        return Response.json(
          { error: "AniList search failed. Try again in a moment." },
          { status: 502 },
        );
      }
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(page, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`AniList search example: http://localhost:${server.port}`);
