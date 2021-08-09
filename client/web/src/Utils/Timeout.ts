/**
 * Async timeout
 *
 * @param ms number
 * @returns Promise
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
