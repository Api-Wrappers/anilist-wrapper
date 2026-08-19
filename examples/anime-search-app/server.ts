import {
  Anilist,
  type MediaListStatus,
  type MediaSeason,
} from "@api-wrappers/anilist-wrapper";

const token = Bun.env.ANILIST_TOKEN?.trim();
const username = Bun.env.ANILIST_USERNAME?.trim();
const authenticated = Boolean(token && username);
const anilist = token ? new Anilist(token) : new Anilist();

const cardPageSelection = {
  pageInfo: {
    currentPage: true,
    lastPage: true,
    hasNextPage: true,
    total: true,
  },
  media: {
    id: true,
    title: {
      userPreferred: true,
      english: true,
      romaji: true,
    },
    coverImage: {
      large: true,
      color: true,
    },
    bannerImage: true,
    averageScore: true,
    season: true,
    seasonYear: true,
    format: true,
    status: true,
    episodes: true,
    genres: true,
    siteUrl: true,
  },
} as const;

type CardMedia = {
  id?: number | null;
  title?: {
    userPreferred?: string | null;
    english?: string | null;
    romaji?: string | null;
  } | null;
  coverImage?: {
    large?: string | null;
    color?: string | null;
  } | null;
  bannerImage?: string | null;
  averageScore?: number | null;
  season?: string | null;
  seasonYear?: number | null;
  format?: string | null;
  status?: string | null;
  episodes?: number | null;
  genres?: Array<string | null> | null;
  siteUrl?: string | null;
};

const titleOf = (media: CardMedia) =>
  media.title?.userPreferred ??
  media.title?.english ??
  media.title?.romaji ??
  "Untitled";

const toCard = (media: CardMedia) => ({
  id: media.id,
  title: titleOf(media),
  coverImage: media.coverImage?.large ?? null,
  accentColor: media.coverImage?.color ?? null,
  bannerImage: media.bannerImage ?? null,
  averageScore: media.averageScore ?? null,
  season: media.season ?? null,
  seasonYear: media.seasonYear ?? null,
  format: media.format ?? null,
  status: media.status ?? null,
  episodes: media.episodes ?? null,
  genres: media.genres?.filter((genre): genre is string => Boolean(genre)) ?? [],
  siteUrl: media.siteUrl ?? null,
});

const pagePayload = (page: {
  pageInfo?: {
    currentPage?: number | null;
    lastPage?: number | null;
    hasNextPage?: boolean | null;
    total?: number | null;
  } | null;
  media?: Array<CardMedia | null> | null;
} | null) => ({
  pageInfo: {
    currentPage: page?.pageInfo?.currentPage ?? 1,
    lastPage: page?.pageInfo?.lastPage ?? 1,
    hasNextPage: page?.pageInfo?.hasNextPage ?? false,
    total: page?.pageInfo?.total ?? 0,
  },
  results: (page?.media ?? []).flatMap((media) => (media ? [toCard(media)] : [])),
});

function currentSeason(): { season: MediaSeason; year: number } {
  const now = new Date();
  const month = now.getUTCMonth() + 1;
  const year = now.getUTCFullYear();

  if (month <= 3) return { season: "WINTER" as MediaSeason, year };
  if (month <= 6) return { season: "SPRING" as MediaSeason, year };
  if (month <= 9) return { season: "SUMMER" as MediaSeason, year };
  return { season: "FALL" as MediaSeason, year };
}

function json(data: unknown, init?: ResponseInit) {
  return Response.json(data, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

function errorResponse(error: unknown, message: string, status = 500) {
  console.error(error);
  return json({ error: message }, { status });
}

async function loadDiscovery() {
  const { season, year } = currentSeason();

  const [seasonal, trending, popular] = await Promise.all([
    anilist.anime.getSeasonalAnime(season, year, 1, 12, {
      select: { page: cardPageSelection },
    }),
    anilist.anime.getTrendingAnime(1, 12, {
      select: { page: cardPageSelection },
    }),
    anilist.anime.getPopularAnime(1, 12, {
      select: { page: cardPageSelection },
    }),
  ]);

  return {
    auth: {
      enabled: authenticated,
      username: authenticated ? username : null,
    },
    season: { name: season, year },
    seasonal: pagePayload(seasonal.page),
    trending: pagePayload(trending.page),
    popular: pagePayload(popular.page),
  };
}

async function searchAnime(url: URL) {
  const query = url.searchParams.get("q")?.trim();
  const page = Math.max(1, Number(url.searchParams.get("page") ?? 1) || 1);

  if (!query) {
    return json({ pageInfo: { currentPage: 1, lastPage: 1, hasNextPage: false, total: 0 }, results: [] });
  }

  const result = await anilist.anime.getAnimeBySearch(query, page, 18, {
    select: { page: cardPageSelection },
  });

  return json(pagePayload(result.page));
}

async function loadAnimeDetails(id: number) {
  const [detailResult, relationsResult] = await Promise.all([
    anilist.anime.getAnimeById(id),
    anilist.anime.getRelations(id),
  ]);

  const media = detailResult.Media;
  if (!media) return null;

  const relations = relationsResult.Media?.relations?.edges?.flatMap((edge) => {
    const related = edge?.node;
    if (!related) return [];

    return [
      {
        relationType: edge.relationType ?? null,
        media: toCard(related),
      },
    ];
  }) ?? [];

  return {
    ...toCard(media),
    description: media.description ?? null,
    duration: media.duration ?? null,
    source: media.source ?? null,
    popularity: media.popularity ?? null,
    favourites: media.favourites ?? null,
    trailer: media.trailer
      ? {
          id: media.trailer.id ?? null,
          site: media.trailer.site ?? null,
          thumbnail: media.trailer.thumbnail ?? null,
        }
      : null,
    nextAiringEpisode: media.nextAiringEpisode
      ? {
          episode: media.nextAiringEpisode.episode ?? null,
          airingAt: media.nextAiringEpisode.airingAt ?? null,
          timeUntilAiring: media.nextAiringEpisode.timeUntilAiring ?? null,
        }
      : null,
    rankings: media.rankings?.slice(0, 5).flatMap((ranking) =>
      ranking
        ? [
            {
              rank: ranking.rank,
              type: ranking.type,
              context: ranking.context,
              year: ranking.year,
              season: ranking.season,
              allTime: ranking.allTime,
            },
          ]
        : [],
    ) ?? [],
    tags: media.tags?.slice(0, 12).flatMap((tag) =>
      tag ? [{ name: tag.name, rank: tag.rank, isMediaSpoiler: tag.isMediaSpoiler }] : [],
    ) ?? [],
    studios: media.studios?.edges?.slice(0, 8).flatMap((edge) =>
      edge?.node ? [{ id: edge.node.id, name: edge.node.name }] : [],
    ) ?? [],
    characters: media.characters?.edges?.slice(0, 8).flatMap((edge) =>
      edge?.node
        ? [
            {
              id: edge.node.id,
              name: edge.node.name?.full ?? "Unknown character",
              image: edge.node.image?.large ?? null,
              role: edge.role ?? null,
            },
          ]
        : [],
    ) ?? [],
    externalLinks: media.externalLinks?.flatMap((link) =>
      link?.url ? [{ site: link.site, url: link.url, type: link.type }] : [],
    ) ?? [],
    relations,
  };
}

function requireAuth() {
  if (!authenticated || !username) {
    return json(
      {
        error:
          "Authenticated dashboard features require ANILIST_TOKEN and ANILIST_USERNAME on the server.",
      },
      { status: 401 },
    );
  }

  return null;
}

async function loadLibrary() {
  const denied = requireAuth();
  if (denied) return denied;

  const result = await anilist.mediaList.getMediaListByUsername(username!, "ANIME");
  const entries = result.MediaListCollection?.lists?.flatMap((list) =>
    list?.entries?.flatMap((entry) => {
      if (!entry?.media) return [];

      return [
        {
          id: entry.id,
          mediaId: entry.mediaId,
          status: entry.status,
          score: entry.score,
          progress: entry.progress,
          repeat: entry.repeat,
          updatedAt: entry.updatedAt,
          media: toCard(entry.media),
        },
      ];
    }) ?? [],
  ) ?? [];

  entries.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));

  return json({ username, entries });
}

const allowedStatuses = new Set([
  "CURRENT",
  "PLANNING",
  "COMPLETED",
  "PAUSED",
  "DROPPED",
  "REPEATING",
]);

async function saveLibraryEntry(request: Request, mediaId: number) {
  const denied = requireAuth();
  if (denied) return denied;

  const body = (await request.json()) as {
    status?: string;
    progress?: number;
  };

  const status = body.status?.toUpperCase();
  if (status && !allowedStatuses.has(status)) {
    return json({ error: "Unsupported AniList media-list status." }, { status: 400 });
  }

  const progress =
    body.progress == null ? undefined : Math.max(0, Math.floor(Number(body.progress) || 0));

  const saved = await anilist.mediaList.saveEntry({
    mediaId,
    status: status as MediaListStatus | undefined,
    progress,
  });

  return json({ entry: saved.SaveMediaListEntry ?? null });
}

async function deleteLibraryEntry(entryId: number) {
  const denied = requireAuth();
  if (denied) return denied;

  const deleted = await anilist.mediaList.deleteEntry(entryId);
  return json({ deleted: deleted.DeleteMediaListEntry?.deleted ?? false });
}

const staticFiles = new Map<string, { file: ReturnType<typeof Bun.file>; type: string }>([
  [
    "/",
    {
      file: Bun.file(new URL("./public/index.html", import.meta.url)),
      type: "text/html; charset=utf-8",
    },
  ],
  [
    "/app.js",
    {
      file: Bun.file(new URL("./public/app.js", import.meta.url)),
      type: "text/javascript; charset=utf-8",
    },
  ],
  [
    "/styles.css",
    {
      file: Bun.file(new URL("./public/styles.css", import.meta.url)),
      type: "text/css; charset=utf-8",
    },
  ],
]);

const server = Bun.serve({
  port: Number(Bun.env.PORT ?? 3000),
  async fetch(request) {
    const url = new URL(request.url);

    try {
      if (request.method === "GET" && url.pathname === "/api/discover") {
        return json(await loadDiscovery());
      }

      if (request.method === "GET" && url.pathname === "/api/search") {
        return await searchAnime(url);
      }

      const animeMatch = url.pathname.match(/^\/api\/anime\/(\d+)$/);
      if (request.method === "GET" && animeMatch) {
        const details = await loadAnimeDetails(Number(animeMatch[1]));
        return details
          ? json(details)
          : json({ error: "Anime not found." }, { status: 404 });
      }

      if (request.method === "GET" && url.pathname === "/api/library") {
        return await loadLibrary();
      }

      const saveMatch = url.pathname.match(/^\/api\/library\/media\/(\d+)$/);
      if (request.method === "PATCH" && saveMatch) {
        return await saveLibraryEntry(request, Number(saveMatch[1]));
      }

      const deleteMatch = url.pathname.match(/^\/api\/library\/entry\/(\d+)$/);
      if (request.method === "DELETE" && deleteMatch) {
        return await deleteLibraryEntry(Number(deleteMatch[1]));
      }

      if (request.method === "GET") {
        const asset = staticFiles.get(url.pathname);
        if (asset) {
          return new Response(asset.file, {
            headers: { "content-type": asset.type },
          });
        }
      }

      return new Response("Not found", { status: 404 });
    } catch (error) {
      return errorResponse(error, "The AniList request failed. Try again in a moment.", 502);
    }
  },
});

console.log(`AniList dashboard example: http://localhost:${server.port}`);
console.log(
  authenticated
    ? `Authenticated AniList features enabled for ${username}.`
    : "Discovery mode only. Set ANILIST_TOKEN and ANILIST_USERNAME to enable list management.",
);

process.on("SIGINT", async () => {
  await anilist.dispose();
  process.exit(0);
});
