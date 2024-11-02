/**
 * Validates a string exists.
 */
export const validateRequired = (value: string) => value.trim().length > 0

/**
 * Validates a string has a minimum length.
 */
export const validateMinLength = (minLength: number) => (value: string) => value.trim().length >= minLength

// eslint-disable-next-line no-control-regex, no-useless-escape
const emailRegex = new RegExp('([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])')
/**
 * Validates a string is an email address.
 */
export const validateEmail = (email: string) => emailRegex.test(email)
