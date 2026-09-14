import type { MediaTypeNonEnum } from "../@types";
import { MediaType } from "../__generated__/anilist-sdk";

export const toMediaType = (mediaType: MediaTypeNonEnum): MediaType => {
	if (mediaType === "ANIME") return MediaType.Anime;
	if (mediaType === "MANGA") return MediaType.Manga;
	throw new TypeError('mediaType must be "ANIME" or "MANGA".');
};
