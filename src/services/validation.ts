/**
 * AniList caps `perPage` at 50 for every paginated connection.
 */
export const ANILIST_MAX_PER_PAGE = 50;

/**
 * Throws unless `value` is a positive integer, and returns it unchanged.
 * @param value - The value to validate.
 * @param name - Argument name used in the error message.
 */
export const assertPositiveInt = (value: number, name = "id"): number => {
	if (!Number.isInteger(value) || value <= 0) {
		throw new TypeError(`${name} must be a positive integer.`);
	}
	return value;
};

/**
 * Validates an optional `perPage` argument against AniList's maximum of 50 and
 * returns it, or the fallback when it is `undefined`.
 * @param perPage - The caller-provided page size.
 * @param fallback - Value returned when `perPage` is undefined.
 */
export const normalizePerPage = (
	perPage: number | undefined,
	fallback: number,
): number => {
	if (perPage === undefined) return fallback;
	if (
		!Number.isInteger(perPage) ||
		perPage < 1 ||
		perPage > ANILIST_MAX_PER_PAGE
	) {
		throw new TypeError(
			`perPage must be an integer between 1 and ${ANILIST_MAX_PER_PAGE} (AniList's maximum).`,
		);
	}
	return perPage;
};
