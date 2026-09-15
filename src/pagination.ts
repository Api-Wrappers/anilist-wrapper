import { assertPositiveInt } from "./services/validation";

/**
 * Minimal shape shared by AniList page responses (`Page.pageInfo` and the
 * selected `page.pageInfo`).
 */
export type PageInfoLike = {
	hasNextPage?: boolean | null;
	currentPage?: number | null;
};

/**
 * Result of extracting a page of items from a response.
 */
export type ExtractedPage<TItem> = {
	pageInfo?: PageInfoLike | null;
	items?: Array<TItem | null> | null;
};

/**
 * Fetches a single page. Called sequentially by {@link paginate}.
 */
export type PageFetcher<TResponse> = (page: number) => Promise<TResponse>;

/**
 * Maps a page response to its page info and items. Write one extractor per
 * response shape; both the generated SDK `Page` shape and the selected
 * lowercase `page` shape work.
 */
export type PageExtractor<TResponse, TItem> = (
	response: TResponse,
) => ExtractedPage<TItem>;

export type PaginateOptions = {
	/** First page to request. Defaults to 1. */
	startPage?: number;
	/** Maximum number of pages to request. Defaults to Infinity. */
	maxPages?: number;
};

/**
 * Sequentially iterates every item across a paginated AniList endpoint.
 *
 * Stops when `pageInfo.hasNextPage` is not `true` or `maxPages` is reached.
 * Errors — including `RateLimitError` from api-core — propagate to the caller
 * untouched so retry/back-off handling stays with the consumer.
 *
 * @example
 * ```typescript
 * for await (const media of paginate(
 *   (page) => anilist.anime.getAnimeBySearch("Frieren", page, 50),
 *   (response) => ({
 *     pageInfo: response.Page?.pageInfo,
 *     items: response.Page?.media,
 *   }),
 * )) {
 *   console.log(media.title?.userPreferred);
 * }
 * ```
 */
export async function* paginate<TResponse, TItem>(
	fetchPage: PageFetcher<TResponse>,
	extract: PageExtractor<TResponse, TItem>,
	options: PaginateOptions = {},
): AsyncGenerator<TItem, void, undefined> {
	const startPage = assertPositiveInt(options.startPage ?? 1, "startPage");
	const maxPages = options.maxPages ?? Number.POSITIVE_INFINITY;
	if (
		maxPages !== Number.POSITIVE_INFINITY &&
		(!Number.isInteger(maxPages) || maxPages < 0)
	) {
		throw new TypeError("maxPages must be a non-negative integer or Infinity.");
	}

	for (
		let page = startPage, fetched = 0;
		fetched < maxPages;
		page++, fetched++
	) {
		const response = await fetchPage(page);
		const { pageInfo, items } = extract(response);

		for (const item of items ?? []) {
			if (item !== null && item !== undefined) {
				yield item;
			}
		}

		if (pageInfo?.hasNextPage !== true) return;
	}
}

/**
 * Collects every item from a paginated AniList endpoint into an array.
 * See {@link paginate} for the extractor contract.
 */
export async function collectPages<TResponse, TItem>(
	fetchPage: PageFetcher<TResponse>,
	extract: PageExtractor<TResponse, TItem>,
	options: PaginateOptions = {},
): Promise<Array<TItem>> {
	const items: Array<TItem> = [];

	for await (const item of paginate(fetchPage, extract, options)) {
		items.push(item);
	}

	return items;
}
