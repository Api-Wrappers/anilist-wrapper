/**
 * Test utilities for the AniList wrapper tests
 */

/**
 * Type for API errors that might occur during testing
 */
export interface ApiError {
	response?: {
		status?: number;
		headers?: Record<string, string>;
	};
	message?: string;
}

/**
 * Helper function to add delay between API calls to respect rate limits
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Helper function to handle rate limiting errors gracefully
 * @param error - The error to check
 * @returns True if the error is a rate limiting error (429)
 */
export const isRateLimitError = (error: unknown): error is ApiError => {
	return (
		typeof error === "object" &&
		error !== null &&
		"response" in error &&
		typeof (error as ApiError).response?.status === "number" &&
		(error as ApiError).response?.status === 429
	);
};

/**
 * Helper function to log rate limiting and skip the test
 */
export const handleRateLimit = () => {
	console.log("Rate limited - skipping test");
};
