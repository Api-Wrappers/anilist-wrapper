import type { MediaTypeNonEnum } from "../@types";
import { MediaType } from "../__generated__/anilist-sdk";

export const toMediaType = (mediaType: MediaTypeNonEnum) =>
	mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga;
