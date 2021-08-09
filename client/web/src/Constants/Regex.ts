export const REGEX_GET_OPTION: RegExp = /^.*option=(\w*).*$/;
export const REGEX_GET_SECTION: RegExp = /^.*section=(\w*).*$/;

/**
 * one lowercase letter (?=.*[a-z])
 * one uppercase letter (?=.*[A-Z])
 * one digit (?=.*[0-9])
 * one special character (?=.*[^A-Za-z0-9])
 * at least eight characters long(?=.{8,})
 */
export const REGEX_STRONG_PASSWORD: RegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
