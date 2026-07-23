import type { getSdk } from "../__generated__/anilist-sdk";
import type { AnilistRequestOptions } from "../client";

export type ANILISTSDK = ReturnType<typeof getSdk<AnilistRequestOptions>>;

export type MediaTypeNonEnum = "ANIME" | "MANGA";
