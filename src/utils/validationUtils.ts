/**
 * Validates a string exists.
 */
export const validateRequired = (value: string) => value.trim().length > 0

/**
 * Validates a string has a minimum length.
 */
export const validateMinLength = (minLength: number) => (value: string) => value.trim().length >= minLength
