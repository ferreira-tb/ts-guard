export class AssertionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AssertionError';
    };
};

/////// TYPE GUARDS ///////
// General.
/** Verify if a value is instance of a class. */
export const isInstanceOf = <T>(value: unknown, constructor: new (...args: any[]) => T): value is T => value instanceof constructor;

// Numbers.
/** Verify if a value is a number. */
export const isNumber = (value: unknown): value is number => typeof value === 'number';
/** Verify if a value is an integer. */
export const isInteger = (value: unknown): value is number => Number.isInteger(value);
/** Verify if a value is a finite number. */
export const isFiniteNumber = (value: unknown): value is number => Number.isFinite(value);

// Numbers, excluding zero.
/** Verify if a value is a number different from zero. */
export const isNotZero = (value: unknown): value is number => ((isPositiveNumber(value) || isNegativeNumber(value)) && 1 + value !== 1);

// Numbers, including null.
/** Verify if a value is a number, or null. */
export const isNumberOrNull = (value: unknown): value is number | null => (value === null || isNumber(value));
/** Verify if a value is an integer, or null. */
export const isIntegerOrNull = (value: unknown): value is number | null => (value === null || isInteger(value));
/** Verify if a value is a finite number, or null. */
export const isFiniteOrNull = (value: unknown): value is number | null => (value === null || isFiniteNumber(value));
/** Verify if a value is a number different from zero, or null. */
export const isNotZeroOrNull = (value: unknown): value is number | null => (value === null || isNotZero(value));

// Positive or negative numbers.
/** Verify if a value is a positive finite number. */
export const isPositiveNumber = (value: unknown): value is number => (isFiniteNumber(value) && Math.sign(value) === 1);
/** Verify if a value is a positive integer. */
export const isPositiveInteger = (value: unknown): value is number => (isInteger(value) && Math.sign(value) === 1);
/** Verify if a value is a negative finite number. */
export const isNegativeNumber = (value: unknown): value is number => (isFiniteNumber(value) && Math.sign(value) === -1);
/** Verify if a value is a negative integer. */
export const isNegativeInteger = (value: unknown): value is number => (isInteger(value) && Math.sign(value) === -1);
/** Verify if a value is positive finite number, or null. */
export const isPositiveOrNull = (value: unknown): value is number | null => (value === null || isPositiveNumber(value));
/** Verify if a value is positive integer, or null. */
export const isPositiveIntegerOrNull = (value: unknown): value is number | null => (value === null || isPositiveInteger(value));
/** Verify if a value is negative finite number, or null. */
export const isNegativeOrNull = (value: unknown): value is number | null => (value === null || isNegativeNumber(value));
/** Verify if a value is negative integer, or null. */
export const isNegativeIntegerOrNull = (value: unknown): value is number | null => (value === null || isNegativeInteger(value));
/** Verify if a value is not a positive number. */
export const isNotPositiveNumber = (value: unknown): value is number => (isFiniteNumber(value) && Math.sign(value) !== 1);
/** Verify if a value is not a negative number. */
export const isNotNegativeNumber = (value: unknown): value is number => (isFiniteNumber(value) && Math.sign(value) !== -1);

// Strings.
/** Verify if a value is a string, including empty strings. */
export const isAnyString = (value: unknown): value is string => typeof value === 'string';
/** Verify if a value is a string, excluding empty strings. */
export const isString = (value: unknown): value is string => (isAnyString(value) && value.length > 0);

// Strings, including null.
/** Verify if a value is a string, including empty strings, or null. */
export const isAnyStringOrNull = (value: unknown): value is string | null => (value === null || isAnyString(value));
/** Verify if a value is a string, excluding empty strings, or null. */
export const isStringOrNull = (value: unknown): value is string | null => (value === null || isString(value));

// Numbers and strings.
/** Verify if a value is a number or a nonempty string. */
export const isNumberOrString = (value: unknown): value is number | string => (isNumber(value) || isString(value));
/** Verify if a value is an integer or a nonempty string. */
export const isIntegerOrString = (value: unknown): value is number | string => (isInteger(value) || isString(value));
/** Verify if a value is a finite number or a nonempty string. */
export const isFiniteOrString = (value: unknown): value is number | string => (isFiniteNumber(value) || isString(value));
/** Verify if a value is a positive number or a nonempty string. */
export const isPositiveOrString = (value: unknown): value is number | string => (isPositiveNumber(value) || isString(value));
/** Verify if a value is a positive integer or a nonempty string. */
export const isPositiveIntegerOrString = (value: unknown): value is number | string => (isPositiveInteger(value) || isString(value));
/** Verify if a value is a negative number or a nonempty string. */
export const isNegativeOrString = (value: unknown): value is number | string => (isNegativeNumber(value) || isString(value));
/** Verify if a value is a negative integer or a nonempty string. */
export const isNegativeIntegerOrString = (value: unknown): value is number | string => (isNegativeInteger(value) || isString(value));
/** Verify if a value is a number different from zero or a nonempty string. */
export const isNotZeroOrString = (value: unknown): value is number | string => (isNotZero(value) || isString(value));

/** Verify if a value is a number or a string. */
export const isNumberOrAnyString = (value: unknown): value is number | string => (isNumber(value) || isAnyString(value));
/** Verify if a value is an integer or a string. */
export const isIntegerOrAnyString = (value: unknown): value is number | string => (isInteger(value) || isAnyString(value));
/** Verify if a value is a finite number or a string. */
export const isFiniteOrAnyString = (value: unknown): value is number | string => (isFiniteNumber(value) || isAnyString(value));
/** Verify if a value is a positive number or a string. */
export const isPositiveOrAnyString = (value: unknown): value is number | string => (isPositiveNumber(value) || isAnyString(value));
/** Verify if a value is a positive integer or a string. */
export const isPositiveIntegerOrAnyString = (value: unknown): value is number | string => (isPositiveInteger(value) || isAnyString(value));
/** Verify if a value is a negative number or a string. */
export const isNegativeOrAnyString = (value: unknown): value is number | string => (isNegativeNumber(value) || isAnyString(value));
/** Verify if a value is a negative integer or a string. */
export const isNegativeIntegerOrAnyString = (value: unknown): value is number | string => (isNegativeInteger(value) || isAnyString(value));
/** Verify if a value is a number different from zero or a string. */
export const isNotZeroOrAnyString = (value: unknown): value is number | string => (isNotZero(value) || isAnyString(value));

// Booleans.
/** Verify if a value is a boolean. */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
/** Verify if a value is truthy. */
export const isTruthy = (value: unknown) => Boolean(value);
/** Verify if a value is falsy. */
export const isFalsy = (value: unknown) => !Boolean(value);

// Booleans, including null.
/** Verify if a value is a boolean or null. */
export const isBooleanOrNull = (value: unknown): value is boolean | null => (value === null || typeof value === 'boolean');
/** Verify if a value is true or null. */
export const isTrueOrNull = (value: unknown): value is boolean | null => (value === null || value === true);
/** Verify if a value is false or null. */
export const isFalseOrNull = (value: unknown): value is boolean | null => (value === null || value === false);

// Null and undefined.
/** Verify if a value is null. */
export const isNull = (value: unknown): value is null => value === null;
/** Verify if a value is undefined. */
export const isUndefined = (value: unknown): value is undefined => value === undefined;
/** Verify if a value is nullish. */
export const isNullish = (value: unknown): value is null | undefined => isNull(value) || isUndefined(value);
/** Verify if a value is not nullish. */
export const isNotNullish = (value: unknown) => !isNull(value) && !isUndefined(value);

// Arrays.
/** Verify if a value is an array. */
export const isArray: typeof Array['isArray'] = (value: any): value is any[] => Array.isArray(value);
/** Verify if a value is included in an array. */
export const arrayIncludes = <T>(array: T[], value: unknown): value is T => array.includes(value as T);

// Objects.
/** Verify if a value is an object. */
export const isObject = <T extends object>(value: unknown): value is T => {
    return typeof value === 'object' && !isNull(value) && !isArray(value);
};

/**
 * Verify if two objects have exactly the same keys.
 * @param value Value to be checked.
 * @param reference Object to be used as reference.
 */
export function objectHasSameKeys<T extends object>(value: T, reference: unknown): value is T {
    try {
        if (!isObject(value) || !isObject(reference)) return false;

        const keys = new Set(Object.keys(value));
        const referenceKeys = new Set(Object.keys(reference));
    
        if(keys.size !== referenceKeys.size) return false;
    
        for (const item of keys.values()) {
            if(!referenceKeys.has(item)) return false;
        };

        return true;

    } catch {
        return false;
    };
};

/////// ASSERTIONS ///////
// General.
/**
 * Asserts that a condition is met.
 * @param condition Condition to be met.
 * @param message Message to be displayed if the condition is not met.
 */
export function assert(condition: unknown, message?: string): asserts condition {
    if (!message) message = 'condition is not met';
    if (!condition) throw new AssertionError(message);
};

/**
 * Asserts that a value is an instance of a specific class.
 * @param value Value to be checked.
 * @param constructor Class to be checked against.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertInstanceOf<T>(value: unknown, constructor: new (...args: any[]) => T, message?: string): asserts value is T {
    if (!message) message = 'value is not an instance of the specified class';
    if (!isInstanceOf(value, constructor)) throw new AssertionError(message);
};

// Numbers.
/**
 * Asserts that a value is a number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a number';
    if (!isNumber(value)) throw new AssertionError(message);
};
/**
 * Asserts that a value is an integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not an integer';
    if (!isInteger(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFinite(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a finite number';
    if (!isFiniteNumber(value)) throw new AssertionError(message);
};

// Numbers, excluding zero.
/**
 * Asserts that a value is a finite number different from zero.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZero(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a finite number different from zero';
    if (!isNotZero(value)) throw new AssertionError(message);
};

// Numbers, including null.
/**
 * Asserts that a value is a number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumberOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a number or null';
    if (!isNumberOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is an integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not an integer or null';
    if (!isIntegerOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFiniteOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a finite number or null';
    if (!isFiniteOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a number different from zero, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZeroOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a number different from zero or null';
    if (!isNotZeroOrNull(value)) throw new AssertionError(message);
};

// Positive or negative numbers.
/**
 * Asserts that a value is a positive finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a positive number';
    if (!isPositiveNumber(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a positive integer';
    if (!isPositiveInteger(value)) throw new AssertionError(message);
}

/**
 * Asserts that a value is a negative finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a negative number';
    if (!isNegativeNumber(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a negative integer';
    if (!isNegativeInteger(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a positive number or null';
    if (!isPositiveOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a positive integer or null';
    if (!isPositiveIntegerOrNull(value)) throw new AssertionError(message);
}

/**
 * Asserts that a value is a negative finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a negative number or null';
    if (!isNegativeOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a negative integer or null';
    if (!isNegativeIntegerOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number different from zero and not positive.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotPositiveNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a number different from zero and not positive';
    if (!isNotPositiveNumber(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number different from zero and not negative.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotNegativeNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a number different from zero and not negative';
    if (!isNotNegativeNumber(value)) throw new AssertionError(message);
};

// Strings.
/**
 * Asserts that a value is a string, including empty ones.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertAnyString(value: unknown, message?: string): asserts value is string {
    if (!message) message = 'value is not a string';
    if (!isAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertString(value: unknown, message?: string): asserts value is string {
    if (!message) message = 'value is not a nonempty string';
    if (!isString(value)) throw new AssertionError(message);
};

// Strings, including null.
/**
 * Asserts that a value is a string, including empty ones, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertAnyStringOrNull(value: unknown, message?: string): asserts value is string | null {
    if (!message) message = 'value is not a string or null';
    if (!isAnyStringOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a nonempty string, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertStringOrNull(value: unknown, message?: string): asserts value is string | null {
    if (!message) message = 'value is not a nonempty string or null';
    if (!isStringOrNull(value)) throw new AssertionError(message);
};

// Numbers and strings.
/**
 * Asserts that a value is a number, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumberOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a number or a nonempty string';
    if (!isNumberOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is an integer, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertIntegerOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not an integer or a nonempty string';
    if (!isIntegerOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFiniteOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a finite number or a nonempty string';
    if (!isFiniteOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive number, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a positive number or a nonempty string';
    if (!isPositiveOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive integer, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveIntegerOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a positive integer or a nonempty string';
    if (!isPositiveIntegerOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative number, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a negative number or a nonempty string';
    if (!isNegativeOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative integer, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeIntegerOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a negative integer or a nonempty string';
    if (!isNegativeIntegerOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite non-zero number, or a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZeroOrString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a non-zero number or a nonempty string';
    if (!isNotZeroOrString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a number or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumberOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a number or a string';
    if (!isNumberOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is an integer or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertIntegerOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not an integer or a string';
    if (!isIntegerOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a finite number or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFiniteOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a finite number or a string';
    if (!isFiniteOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive number or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a positive number or a string';
    if (!isPositiveOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a positive integer or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveIntegerOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a positive integer or a string';
    if (!isPositiveIntegerOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative number or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a negative number or a string';
    if (!isNegativeOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is a negative integer or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeIntegerOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a negative integer or a string';
    if (!isNegativeIntegerOrAnyString(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is non-zero number or a string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZeroOrAnyString(value: unknown, message?: string): asserts value is number | string {
    if (!message) message = 'value is not a non-zero number or a string';
    if (!isNotZeroOrAnyString(value)) throw new AssertionError(message);
};

// Booleans, including null.
/**
 * Asserts that a value is a boolean, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertBooleanOrNull(value: unknown, message?: string): asserts value is boolean | null {
    if (!message) message = 'value is not a boolean or null';
    if (!isBooleanOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is true, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertTrueOrNull(value: unknown, message?: string): asserts value is boolean | null {
    if (!message) message = 'value is not true or null';
    if (!isTrueOrNull(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is false, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFalseOrNull(value: unknown, message?: string): asserts value is boolean | null {
    if (!message) message = 'value is not false or null';
    if (!isFalseOrNull(value)) throw new AssertionError(message);
};

// Null and undefined.
/**
 * Asserts that a value is nullish.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNullish(value: unknown, message?: string): asserts value is null | undefined {
    if (!message) message = 'value is not nullish';
    if (!isNullish(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is not nullish.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotNullish(value: unknown, message?: string) {
    if (!message) message = 'value is nullish';
    if (isNullish(value)) throw new AssertionError(message);
};

// Arrays.
export function assertArray<T>(value: unknown, message?: string): asserts value is T[] {
    if (!message) message = 'value is not an array';
    if (!isArray(value)) throw new AssertionError(message);
};

export function assertArrayIncludes<T>(array: T[], value: unknown, message?: string): asserts value is T {
    if (!message) message = 'value is not included in the array';
    if (!arrayIncludes(array, value)) throw new AssertionError(message);
};

// Objects.
/**
 * Asserts that a value is an object.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertObject<T extends object>(value: T, message?: string): asserts value is T {
    if (!message) message = 'value is not an object';
    if (!isObject(value)) throw new AssertionError(message);
};

/**
 * Asserts that a value is an object and it has exactly the same keys as another object.
 * @param value Value to be checked.
 * @param item Item to compare the keys with.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertObjectHasSameKeys<T extends object>(value: T, item: unknown, message?: string): asserts value is T {
    if (!message) message = 'value does not have the same keys as item';
    if (!objectHasSameKeys(value, item)) throw new AssertionError(message);
};

/////// HELPERS ///////
/**
 * Checks a value against a type guard and returns `null` if it does not pass.
 * @param value Value to be checked.
 * @param guard Type guard to be used.
 */
export function toNull<T>(value: T, guard: (...args: any[]) => boolean): T | null {
    return guard(value) ? value : null;
};

/**
 * Checks a value against a type guard and returns `undefined` if it does not pass.
 * @param value Value to be checked.
 * @param guard Type guard to be used.
 */
export function toUndefined<T>(value: T, guard: (...args: any[]) => boolean): T | undefined {
    return guard(value) ? value : undefined;
};

/**
 * Checks a value against a type guard and returns a custom value if it does not pass.
 * @param value Value to be checked.
 * @param custom Will be returned if `value` does not pass the type guard.
 * @param guard Type guard to be used.
 */
export function toCustom<T, C>(value: T, custom: C, guard: (...args: any[]) => boolean): T | C {
    return guard(value) ? value : custom;
};