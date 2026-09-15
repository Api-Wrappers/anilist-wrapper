import { describe, expect, it } from "bun:test";
import { ANILIST_MAX_PER_PAGE, assertPositiveInt, normalizePerPage } from "../src";

describe("assertPositiveInt", () => {
	it("returns valid positive integers unchanged", () => {
		expect(assertPositiveInt(1)).toBe(1);
		expect(assertPositiveInt(16498, "mediaId")).toBe(16498);
	});

	it("throws for zero, negatives, and non-integers", () => {
		expect(() => assertPositiveInt(0)).toThrow(TypeError);
		expect(() => assertPositiveInt(-1)).toThrow(TypeError);
		expect(() => assertPositiveInt(1.5, "mediaId")).toThrow(TypeError);
		expect(() => assertPositiveInt(Number.NaN)).toThrow(TypeError);
	});

	it("names the offending argument in the error message", () => {
		expect(() => assertPositiveInt(0, "userId")).toThrow(
			"userId must be a positive integer.",
		);
	});
});

describe("normalizePerPage", () => {
	it("returns the fallback when perPage is undefined", () => {
		expect(normalizePerPage(undefined, 10)).toBe(10);
	});

	it("returns valid page sizes unchanged", () => {
		expect(normalizePerPage(1, 10)).toBe(1);
		expect(normalizePerPage(ANILIST_MAX_PER_PAGE, 10)).toBe(
			ANILIST_MAX_PER_PAGE,
		);
	});

	it("throws above AniList's maximum with a message naming the limit", () => {
		expect(() => normalizePerPage(51, 10)).toThrow(TypeError);
		expect(() => normalizePerPage(51, 10)).toThrow(
			`perPage must be an integer between 1 and ${ANILIST_MAX_PER_PAGE} (AniList's maximum).`,
		);
	});

	it("throws below one or for non-integers", () => {
		expect(() => normalizePerPage(0, 10)).toThrow(TypeError);
		expect(() => normalizePerPage(2.5, 10)).toThrow(TypeError);
	});
});
