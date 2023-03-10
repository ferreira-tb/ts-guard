export class AssertionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AssertionError';
    };
};

export class NumberAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'NumberAssertionError';
    };
};

export class StringAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'StringAssertionError';
    };
};

export class BooleanAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'BooleanAssertionError';
    };
};

export class NullishAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'NullishAssertionError';
    };
};

export class ObjectAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'ObjectAssertionError';
    };
};

export class FunctionAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'FunctionAssertionError';
    };
};

export class ArrayAssertionError extends AssertionError {
    constructor(message: string) {
        super(message);
        this.name = 'ArrayAssertionError';
    };
};

/////// TYPE GUARDS ///////
// General.
/** Verify if a value is instance of a class. */
export const isInstanceOf = <T>(value: unknown, constructor: new (...args: any[]) => T): value is T => value instanceof constructor;
/** Verify if two values are of the same type. */
export const isSameType = <T>(value: unknown, reference: T): value is T => typeof value === typeof reference;

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
/** Verify if a value is true. */
export const isTrue = (value: unknown): value is true => value === true;
/** Verify if a value is false. */
export const isFalse = (value: unknown): value is false => value === false;

// Booleans, including null.
/** Verify if a value is a boolean or null. */
export const isBooleanOrNull = (value: unknown): value is boolean | null => (isNull(value) || isBoolean(value));
/** Verify if a value is true or null. */
export const isTrueOrNull = (value: unknown): value is true | null => (isNull(value) || isTrue(value));
/** Verify if a value is false or null. */
export const isFalseOrNull = (value: unknown): value is false | null => (isNull(value) || isFalse(value));

// Null and undefined.
/** Verify if a value is null. */
export const isNull = (value: unknown): value is null => value === null;
/** Verify if a value is not null. */
export const isNotNull = <T>(value: T): value is Exclude<T, null> => !isNull(value);
/** Verify if a value is undefined. */
export const isUndefined = (value: unknown): value is undefined => value === undefined;
/** Verify if a value is not undefined. */
export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => !isUndefined(value);
/** Verify if a value is nullish. */
export const isNullish = (value: unknown): value is null | undefined => isNull(value) || isUndefined(value);
/** Verify if a value is not nullish. */
export const isNotNullish = <T>(value: T): value is Exclude<T, null | undefined> => !isNullish(value);

// Arrays.
/** Verify if a value is an array. */
export const isArray: typeof Array['isArray'] = <K extends any[]>(value: unknown): value is K => Array.isArray(value);
/** Verify if a value is included in an array. */
export const arrayIncludes = <T>(array: T[], value: unknown): value is T => array.includes(value as T);

// Objects.
/** Verify if a value is an object, excluding null and arrays. */
export const isObject = <T extends object>(value: unknown): value is T => {
    return typeof value === 'object' && !isNull(value) && !isArray(value);
};

/** Verify if a value is an object or null, excluding arrays. */
export const isObjectOrNull = <T extends object>(value: unknown): value is T | null => {
    return isNull(value) || isObject(value);
};

/** Verify if a value is an object or an array, excluding null. */
export const isObjectOrArray = <T extends object, K extends any[]>(value: unknown): value is T | K => {
    return isObject(value) || isArray(value);
};

/** Verify if a string is a key of an object. */
export const isKeyOf = <T extends object>(key: unknown, obj: T): key is keyof T => {
    return isString(key) && key in obj;
};

// Functions.
/** Verify if a value is a function. */
export const isFunction = <T extends (...args: any[]) => any>(value: unknown): value is T => typeof value === 'function';

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

/**
 * Asserts that a value is of the same type as a reference.
 * @param value Value to be checked.
 * @param reference Reference to be checked against.
 */
export function assertSameType<T>(value: unknown, reference: T, message?: string): asserts value is T {
    if (!message) message = 'value is not of the same type as reference';
    if (!isSameType(value, reference)) throw new AssertionError(message);
};

// Numbers.
/**
 * Asserts that a value is a number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a number';
    if (!isNumber(value)) throw new NumberAssertionError(message);
};
/**
 * Asserts that a value is an integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not an integer';
    if (!isInteger(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFinite(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a finite number';
    if (!isFiniteNumber(value)) throw new NumberAssertionError(message);
};

// Numbers, excluding zero.
/**
 * Asserts that a value is a finite number different from zero.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZero(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a finite number different from zero';
    if (!isNotZero(value)) throw new NumberAssertionError(message);
};

// Numbers, including null.
/**
 * Asserts that a value is a number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNumberOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a number or null';
    if (!isNumberOrNull(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is an integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not an integer or null';
    if (!isIntegerOrNull(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFiniteOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a finite number or null';
    if (!isFiniteOrNull(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a number different from zero, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotZeroOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a number different from zero or null';
    if (!isNotZeroOrNull(value)) throw new NumberAssertionError(message);
};

// Positive or negative numbers.
/**
 * Asserts that a value is a positive finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a positive number';
    if (!isPositiveNumber(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a positive integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a positive integer';
    if (!isPositiveInteger(value)) throw new NumberAssertionError(message);
}

/**
 * Asserts that a value is a negative finite number.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeNumber(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a negative number';
    if (!isNegativeNumber(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a negative integer.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeInteger(value: unknown, message?: string): asserts value is number {
    if (!message) message = 'value is not a negative integer';
    if (!isNegativeInteger(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a positive finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a positive number or null';
    if (!isPositiveOrNull(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a positive integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertPositiveIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a positive integer or null';
    if (!isPositiveIntegerOrNull(value)) throw new NumberAssertionError(message);
}

/**
 * Asserts that a value is a negative finite number, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a negative number or null';
    if (!isNegativeOrNull(value)) throw new NumberAssertionError(message);
};

/**
 * Asserts that a value is a negative integer, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNegativeIntegerOrNull(value: unknown, message?: string): asserts value is number | null {
    if (!message) message = 'value is not a negative integer or null';
    if (!isNegativeIntegerOrNull(value)) throw new NumberAssertionError(message);
};

// Strings.
/**
 * Asserts that a value is a string, including empty ones.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertAnyString(value: unknown, message?: string): asserts value is string {
    if (!message) message = 'value is not a string';
    if (!isAnyString(value)) throw new StringAssertionError(message);
};

/**
 * Asserts that a value is a nonempty string.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertString(value: unknown, message?: string): asserts value is string {
    if (!message) message = 'value is not a nonempty string';
    if (!isString(value)) throw new StringAssertionError(message);
};

// Strings, including null.
/**
 * Asserts that a value is a string, including empty ones, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertAnyStringOrNull(value: unknown, message?: string): asserts value is string | null {
    if (!message) message = 'value is not a string or null';
    if (!isAnyStringOrNull(value)) throw new StringAssertionError(message);
};

/**
 * Asserts that a value is a nonempty string, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertStringOrNull(value: unknown, message?: string): asserts value is string | null {
    if (!message) message = 'value is not a nonempty string or null';
    if (!isStringOrNull(value)) throw new StringAssertionError(message);
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

// Booleans.
/**
 * Asserts that a value is a boolean.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertBoolean(value: unknown, message?: string): asserts value is boolean {
    if (!message) message = 'value is not a boolean';
    if (!isBoolean(value)) throw new BooleanAssertionError(message);
};

/**
 * Asserts that a value is true.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertTrue(value: unknown, message?: string): asserts value is true {
    if (!message) message = 'value is not true';
    if (!isTrue(value)) throw new BooleanAssertionError(message);
};

/**
 * Asserts that a value is false.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFalse(value: unknown, message?: string): asserts value is false {
    if (!message) message = 'value is not false';
    if (!isFalse(value)) throw new BooleanAssertionError(message);
};

// Booleans, including null.
/**
 * Asserts that a value is a boolean, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertBooleanOrNull(value: unknown, message?: string): asserts value is boolean | null {
    if (!message) message = 'value is not a boolean or null';
    if (!isBooleanOrNull(value)) throw new BooleanAssertionError(message);
};

/**
 * Asserts that a value is true, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertTrueOrNull(value: unknown, message?: string): asserts value is true | null {
    if (!message) message = 'value is not true or null';
    if (!isTrueOrNull(value)) throw new BooleanAssertionError(message);
};

/**
 * Asserts that a value is false, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFalseOrNull(value: unknown, message?: string): asserts value is false | null {
    if (!message) message = 'value is not false or null';
    if (!isFalseOrNull(value)) throw new BooleanAssertionError(message);
};

// Null and undefined.
/**
 * Asserts that a value is null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNull(value: unknown, message?: string): asserts value is null {
    if (!message) message = 'value is not null';
    if (!isNull(value)) throw new NullishAssertionError(message);
};

/**
 * Asserts that a value is not null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotNull<T>(value: T, message?: string): asserts value is Exclude<T, null> {
    if (!message) message = 'value is null';
    if (isNull(value)) throw new NullishAssertionError(message);
};

/**
 * Asserts that a value is undefined.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertUndefined(value: unknown, message?: string): asserts value is undefined {
    if (!message) message = 'value is not undefined';
    if (!isUndefined(value)) throw new NullishAssertionError(message);
};

/**
 * Asserts that a value is not undefined.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotUndefined<T>(value: T, message?: string): asserts value is Exclude<T, undefined> {
    if (!message) message = 'value is undefined';
    if (isUndefined(value)) throw new NullishAssertionError(message);
};

/**
 * Asserts that a value is nullish.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNullish(value: unknown, message?: string): asserts value is null | undefined {
    if (!message) message = 'value is not nullish';
    if (!isNullish(value)) throw new NullishAssertionError(message);
};

/**
 * Asserts that a value is not nullish.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertNotNullish<T>(value: T, message?: string): asserts value is Exclude<T, null | undefined> {
    if (!message) message = 'value is nullish';
    if (isNullish(value)) throw new NullishAssertionError(message);
};

// Arrays.
export function assertArray<T>(value: unknown, message?: string): asserts value is T[] {
    if (!message) message = 'value is not an array';
    if (!isArray(value)) throw new ArrayAssertionError(message);
};

export function assertArrayIncludes<T>(array: T[], value: unknown, message?: string): asserts value is T {
    if (!message) message = 'value is not included in the array';
    if (!arrayIncludes(array, value)) throw new ArrayAssertionError(message);
};

// Objects.
/**
 * Asserts that a value is an object.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertObject<T extends object>(value: unknown, message?: string): asserts value is T {
    if (!message) message = 'value is not an object';
    if (!isObject(value)) throw new ObjectAssertionError(message);
};

/**
 * Asserts that a value is an object, or null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertObjectOrNull<T extends object>(value: unknown, message?: string): asserts value is T | null {
    if (!message) message = 'value is not an object or null';
    if (!isObjectOrNull(value)) throw new ObjectAssertionError(message);
};

/**
 * Asserts that a value is an object or an array, excluding null.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertObjectOrArray<T extends object, K extends any[]>(value: unknown, message?: string): asserts value is T | K {
    if (!message) message = 'value is not an object or an array';
    if (!isObjectOrArray(value)) throw new AssertionError(message);
};

/**
 * Asserts that a string is a key of an object.
 * @param key String key to be checked.
 * @param obj Object to search for the key.
 */
export function assertKeyOf<T extends object>(key: unknown, obj: T, message?: string): asserts key is keyof T {
    if (!message) message = `${key} is not a key of the object`;
    if (!isKeyOf(key, obj)) throw new ObjectAssertionError(message);
};

// Functions.
/**
 * Asserts that a value is a function.
 * @param value Value to be checked.
 * @param message Message to be displayed if the condition is not met.
 */
export function assertFunction<T extends (...args: any[]) => any>(value: unknown, message?: string): asserts value is T {
    if (!message) message = 'value is not a function';
    if (!isFunction(value)) throw new FunctionAssertionError(message);
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
 * Checks a value against a type guard and parses it to an integer if it does not pass.
 * This function may return `NaN` if the value cannot be parsed.
 * If you want to ensure that the value is an integer, use `toIntegerStrict` instead.
 * @param value Value to be checked.
 * @param guard Type guard to be used.
 * @param radix A value between 2 and 36 that specifies the base of the number in string.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 */
export function toInteger<T>(value: T, guard: (...args: any[]) => boolean, radix: number = 10): T | number {
    return guard(value) ? value : Number.parseInt(value as any, radix);
};

/**
 * Checks a value against a type guard and parses it to an integer if it does not pass.
 * This function will throw an error if the value cannot be parsed.
 * If you want to allow `NaN` as a return value, use `toInteger` instead.
 * @param value Value to be checked.
 * @param guard Type guard to be used.
 * @param radix A value between 2 and 36 that specifies the base of the number in string.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 */
export function toIntegerStrict<T>(value: T, guard: (...args: any[]) => boolean, radix: number = 10): T | number {
    if (guard(value)) return value;
    const parsed = Number.parseInt(value as any, radix);
    assertInteger(parsed);
    return parsed;
};

/**
 * Checks a value against a type guard and parses it to an integer if it does not pass.
 * This function will return `null` if the value cannot be parsed.
 * @param value Value to be checked.
 * @param guard Type guard to be used.
 * @param radix A value between 2 and 36 that specifies the base of the number in string.
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 */
export function toIntegerOrNull<T>(value: T, guard: (...args: any[]) => boolean, radix: number = 10): T | number | null {
    if (guard(value)) return value;
    const parsed = Number.parseInt(value as any, radix);
    return isInteger(parsed) ? parsed : null;
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