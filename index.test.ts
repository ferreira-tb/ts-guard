import * as tsg from './src/index.js';

test('is number', () => {
    expect(tsg.isNumber(1)).toBe(true);
    expect(tsg.isNumber(1.1)).toBe(true);
    expect(tsg.isNumber('1')).toBe(false);
    expect(tsg.isNumber(NaN)).toBe(true);
    expect(tsg.isNumber(Infinity)).toBe(true);
    expect(tsg.isNumber(null)).toBe(false);
});

test('is integer', () => {
    expect(tsg.isInteger(1)).toBe(true);
    expect(tsg.isInteger(1.1)).toBe(false);
    expect(tsg.isInteger('1')).toBe(false);
    expect(tsg.isInteger(NaN)).toBe(false);
    expect(tsg.isInteger(Infinity)).toBe(false);
    expect(tsg.isInteger(null)).toBe(false);
});

test('is finite', () => {
    expect(tsg.isFiniteNumber(1)).toBe(true);
    expect(tsg.isFiniteNumber(1.1)).toBe(true);
    expect(tsg.isFiniteNumber('1')).toBe(false);
    expect(tsg.isFiniteNumber(NaN)).toBe(false);
    expect(tsg.isFiniteNumber(Infinity)).toBe(false);
    expect(tsg.isFiniteNumber(null)).toBe(false);
});

test('is positive', () => {
    expect(tsg.isPositiveNumber(1)).toBe(true);
    expect(tsg.isPositiveNumber(1.1)).toBe(true);
    expect(tsg.isPositiveNumber('1')).toBe(false);
    expect(tsg.isPositiveNumber(-1)).toBe(false);
    expect(tsg.isPositiveNumber(-1.1)).toBe(false);
    expect(tsg.isPositiveNumber(0)).toBe(false);
    expect(tsg.isPositiveNumber(NaN)).toBe(false);
    expect(tsg.isPositiveNumber(Infinity)).toBe(false);
    expect(tsg.isPositiveNumber(null)).toBe(false);
});

test('is positive integer', () => {
    expect(tsg.isPositiveInteger(1)).toBe(true);
    expect(tsg.isPositiveInteger(1.1)).toBe(false);
    expect(tsg.isPositiveInteger('1')).toBe(false);
    expect(tsg.isPositiveInteger(-1)).toBe(false);
    expect(tsg.isPositiveInteger(-1.1)).toBe(false);
    expect(tsg.isPositiveInteger(0)).toBe(false);
    expect(tsg.isPositiveInteger(NaN)).toBe(false);
    expect(tsg.isPositiveInteger(Infinity)).toBe(false);
    expect(tsg.isPositiveInteger(null)).toBe(false);
});

test('is negative', () => {
    expect(tsg.isNegativeNumber(1)).toBe(false);
    expect(tsg.isNegativeNumber(1.1)).toBe(false);
    expect(tsg.isNegativeNumber('1')).toBe(false);
    expect(tsg.isNegativeNumber(-1)).toBe(true);
    expect(tsg.isNegativeNumber(-1.1)).toBe(true);
    expect(tsg.isNegativeNumber(0)).toBe(false);
    expect(tsg.isNegativeNumber(NaN)).toBe(false);
    expect(tsg.isNegativeNumber(Infinity)).toBe(false);
    expect(tsg.isNegativeNumber(null)).toBe(false);
});

test('is negative integer', () => {
    expect(tsg.isNegativeInteger(1)).toBe(false);
    expect(tsg.isNegativeInteger(1.1)).toBe(false);
    expect(tsg.isNegativeInteger('1')).toBe(false);
    expect(tsg.isNegativeInteger(-1)).toBe(true);
    expect(tsg.isNegativeInteger(-1.1)).toBe(false);
    expect(tsg.isNegativeInteger(0)).toBe(false);
    expect(tsg.isNegativeInteger(NaN)).toBe(false);
    expect(tsg.isNegativeInteger(Infinity)).toBe(false);
    expect(tsg.isNegativeInteger(null)).toBe(false);
});

test('is number different from zero', () => {
    expect(tsg.isNotZero(1)).toBe(true);
    expect(tsg.isNotZero(1.1)).toBe(true);
    expect(tsg.isNotZero('1')).toBe(false);
    expect(tsg.isNotZero(-1)).toBe(true);
    expect(tsg.isNotZero(-1.1)).toBe(true);
    expect(tsg.isNotZero(0)).toBe(false);
    expect(tsg.isNotZero(NaN)).toBe(false);
    expect(tsg.isNotZero(Infinity)).toBe(false);
    expect(tsg.isNotZero(null)).toBe(false);
});

test('is number or null', () => {
    expect(tsg.isNumberOrNull(1)).toBe(true);
    expect(tsg.isNumberOrNull(1.1)).toBe(true);
    expect(tsg.isNumberOrNull('1')).toBe(false);
    expect(tsg.isNumberOrNull(-1)).toBe(true);
    expect(tsg.isNumberOrNull(-1.1)).toBe(true);
    expect(tsg.isNumberOrNull(0)).toBe(true);
    expect(tsg.isNumberOrNull(NaN)).toBe(true);
    expect(tsg.isNumberOrNull(Infinity)).toBe(true);
    expect(tsg.isNumberOrNull(null)).toBe(true);
});

test('is integer or null', () => {
    expect(tsg.isIntegerOrNull(1)).toBe(true);
    expect(tsg.isIntegerOrNull(1.1)).toBe(false);
    expect(tsg.isIntegerOrNull('1')).toBe(false);
    expect(tsg.isIntegerOrNull(-1)).toBe(true);
    expect(tsg.isIntegerOrNull(-1.1)).toBe(false);
    expect(tsg.isIntegerOrNull(0)).toBe(true);
    expect(tsg.isIntegerOrNull(NaN)).toBe(false);
    expect(tsg.isIntegerOrNull(Infinity)).toBe(false);
    expect(tsg.isIntegerOrNull(null)).toBe(true);
});

test('is finite or null', () => {
    expect(tsg.isFiniteOrNull(1)).toBe(true);
    expect(tsg.isFiniteOrNull(1.1)).toBe(true);
    expect(tsg.isFiniteOrNull('1')).toBe(false);
    expect(tsg.isFiniteOrNull(-1)).toBe(true);
    expect(tsg.isFiniteOrNull(-1.1)).toBe(true);
    expect(tsg.isFiniteOrNull(0)).toBe(true);
    expect(tsg.isFiniteOrNull(NaN)).toBe(false);
    expect(tsg.isFiniteOrNull(Infinity)).toBe(false);
    expect(tsg.isFiniteOrNull(null)).toBe(true);
});

test('is positive or null', () => {
    expect(tsg.isPositiveOrNull(1)).toBe(true);
    expect(tsg.isPositiveOrNull(1.1)).toBe(true);
    expect(tsg.isPositiveOrNull('1')).toBe(false);
    expect(tsg.isPositiveOrNull(-1)).toBe(false);
    expect(tsg.isPositiveOrNull(-1.1)).toBe(false);
    expect(tsg.isPositiveOrNull(0)).toBe(false);
    expect(tsg.isPositiveOrNull(NaN)).toBe(false);
    expect(tsg.isPositiveOrNull(Infinity)).toBe(false);
    expect(tsg.isPositiveOrNull(null)).toBe(true);
});

test('is positive integer or null', () => {
    expect(tsg.isPositiveIntegerOrNull(1)).toBe(true);
    expect(tsg.isPositiveIntegerOrNull(1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull('1')).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(-1)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(-1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(0)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(NaN)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(Infinity)).toBe(false);
    expect(tsg.isPositiveIntegerOrNull(null)).toBe(true);
});

test('is negative or null', () => {
    expect(tsg.isNegativeOrNull(1)).toBe(false);
    expect(tsg.isNegativeOrNull(1.1)).toBe(false);
    expect(tsg.isNegativeOrNull('1')).toBe(false);
    expect(tsg.isNegativeOrNull(-1)).toBe(true);
    expect(tsg.isNegativeOrNull(-1.1)).toBe(true);
    expect(tsg.isNegativeOrNull(0)).toBe(false);
    expect(tsg.isNegativeOrNull(NaN)).toBe(false);
    expect(tsg.isNegativeOrNull(Infinity)).toBe(false);
    expect(tsg.isNegativeOrNull(null)).toBe(true);
});

test('is negative integer or null', () => {
    expect(tsg.isNegativeIntegerOrNull(1)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull('1')).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(-1)).toBe(true);
    expect(tsg.isNegativeIntegerOrNull(-1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(0)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(NaN)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(Infinity)).toBe(false);
    expect(tsg.isNegativeIntegerOrNull(null)).toBe(true);
});

test('is number different from zero or null', () => {
    expect(tsg.isNotZeroOrNull(1)).toBe(true);
    expect(tsg.isNotZeroOrNull(1.1)).toBe(true);
    expect(tsg.isNotZeroOrNull('1')).toBe(false);
    expect(tsg.isNotZeroOrNull(-1)).toBe(true);
    expect(tsg.isNotZeroOrNull(-1.1)).toBe(true);
    expect(tsg.isNotZeroOrNull(0)).toBe(false);
    expect(tsg.isNotZeroOrNull(NaN)).toBe(false);
    expect(tsg.isNotZeroOrNull(Infinity)).toBe(false);
    expect(tsg.isNotZeroOrNull(null)).toBe(true);
});

test('is string', () => {
    expect(tsg.isAnyString('')).toBe(true);
    expect(tsg.isAnyString('a')).toBe(true);
    expect(tsg.isAnyString('1')).toBe(true);
    expect(tsg.isAnyString(1)).toBe(false);
    expect(tsg.isAnyString(1.1)).toBe(false);
    expect(tsg.isAnyString(-1)).toBe(false);
    expect(tsg.isAnyString(true)).toBe(false);
    expect(tsg.isAnyString(null)).toBe(false);
});

test('is nonempty string', () => {
    expect(tsg.isString('')).toBe(false);
    expect(tsg.isString('a')).toBe(true);
    expect(tsg.isString('1')).toBe(true);
    expect(tsg.isString(1)).toBe(false);
    expect(tsg.isString(1.1)).toBe(false);
    expect(tsg.isString(-1)).toBe(false);
    expect(tsg.isString(true)).toBe(false);
    expect(tsg.isString(null)).toBe(false);
});

test('is string or null', () => {
    expect(tsg.isAnyStringOrNull('')).toBe(true);
    expect(tsg.isAnyStringOrNull('a')).toBe(true);
    expect(tsg.isAnyStringOrNull('1')).toBe(true);
    expect(tsg.isAnyStringOrNull(1)).toBe(false);
    expect(tsg.isAnyStringOrNull(1.1)).toBe(false);
    expect(tsg.isAnyStringOrNull(-1)).toBe(false);
    expect(tsg.isAnyStringOrNull(true)).toBe(false);
    expect(tsg.isAnyStringOrNull(null)).toBe(true);
});

test('is nonempty string or null', () => {
    expect(tsg.isStringOrNull('')).toBe(false);
    expect(tsg.isStringOrNull('a')).toBe(true);
    expect(tsg.isStringOrNull('1')).toBe(true);
    expect(tsg.isStringOrNull(1)).toBe(false);
    expect(tsg.isStringOrNull(1.1)).toBe(false);
    expect(tsg.isStringOrNull(-1)).toBe(false);
    expect(tsg.isStringOrNull(true)).toBe(false);
    expect(tsg.isStringOrNull(null)).toBe(true);
});

test('is number or nonempty string', () => {
    expect(tsg.isNumberOrString('')).toBe(false);
    expect(tsg.isNumberOrString('a')).toBe(true);
    expect(tsg.isNumberOrString('1')).toBe(true);
    expect(tsg.isNumberOrString(1)).toBe(true);
    expect(tsg.isNumberOrString(1.1)).toBe(true);
    expect(tsg.isNumberOrString('1')).toBe(true);
    expect(tsg.isNumberOrString(-1)).toBe(true);
    expect(tsg.isNumberOrString(-1.1)).toBe(true);
    expect(tsg.isNumberOrString(0)).toBe(true);
    expect(tsg.isNumberOrString(NaN)).toBe(true);
    expect(tsg.isNumberOrString(Infinity)).toBe(true);
    expect(tsg.isNumberOrString(true)).toBe(false);
    expect(tsg.isNumberOrString(null)).toBe(false);
    expect(tsg.isNumberOrString(new Number())).toBe(false);
    expect(tsg.isNumberOrString(new String())).toBe(false);
});

test('is integer or nonempty string', () => {
    expect(tsg.isIntegerOrString('')).toBe(false);
    expect(tsg.isIntegerOrString('a')).toBe(true);
    expect(tsg.isIntegerOrString('1')).toBe(true);
    expect(tsg.isIntegerOrString(1)).toBe(true);
    expect(tsg.isIntegerOrString(1.1)).toBe(false);
    expect(tsg.isIntegerOrString('1')).toBe(true);
    expect(tsg.isIntegerOrString(-1)).toBe(true);
    expect(tsg.isIntegerOrString(-1.1)).toBe(false);
    expect(tsg.isIntegerOrString(0)).toBe(true);
    expect(tsg.isIntegerOrString(NaN)).toBe(false);
    expect(tsg.isIntegerOrString(Infinity)).toBe(false);
    expect(tsg.isIntegerOrString(true)).toBe(false);
    expect(tsg.isIntegerOrString(null)).toBe(false);
    expect(tsg.isIntegerOrString(new Number())).toBe(false);
    expect(tsg.isIntegerOrString(new String())).toBe(false);
});

test('is finite number or nonempty string', () => {
    expect(tsg.isFiniteOrString('')).toBe(false);
    expect(tsg.isFiniteOrString('a')).toBe(true);
    expect(tsg.isFiniteOrString('1')).toBe(true);
    expect(tsg.isFiniteOrString(1)).toBe(true);
    expect(tsg.isFiniteOrString(1.1)).toBe(true);
    expect(tsg.isFiniteOrString('1')).toBe(true);
    expect(tsg.isFiniteOrString(-1)).toBe(true);
    expect(tsg.isFiniteOrString(-1.1)).toBe(true);
    expect(tsg.isFiniteOrString(0)).toBe(true);
    expect(tsg.isFiniteOrString(NaN)).toBe(false);
    expect(tsg.isFiniteOrString(Infinity)).toBe(false);
    expect(tsg.isFiniteOrString(true)).toBe(false);
    expect(tsg.isFiniteOrString(null)).toBe(false);
});

test('is positive number or nonempty string', () => {
    expect(tsg.isPositiveOrString('')).toBe(false);
    expect(tsg.isPositiveOrString('a')).toBe(true);
    expect(tsg.isPositiveOrString('1')).toBe(true);
    expect(tsg.isPositiveOrString(1)).toBe(true);
    expect(tsg.isPositiveOrString(1.1)).toBe(true);
    expect(tsg.isPositiveOrString('1')).toBe(true);
    expect(tsg.isPositiveOrString(-1)).toBe(false);
    expect(tsg.isPositiveOrString(-1.1)).toBe(false);
    expect(tsg.isPositiveOrString(0)).toBe(false);
    expect(tsg.isPositiveOrString(NaN)).toBe(false);
    expect(tsg.isPositiveOrString(Infinity)).toBe(false);
    expect(tsg.isPositiveOrString(true)).toBe(false);
    expect(tsg.isPositiveOrString(null)).toBe(false);
});

test('is positive integer or nonempty string', () => {
    expect(tsg.isPositiveIntegerOrString('')).toBe(false);
    expect(tsg.isPositiveIntegerOrString('a')).toBe(true);
    expect(tsg.isPositiveIntegerOrString('1')).toBe(true);
    expect(tsg.isPositiveIntegerOrString(1)).toBe(true);
    expect(tsg.isPositiveIntegerOrString(1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrString('1')).toBe(true);
    expect(tsg.isPositiveIntegerOrString(-1)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(-1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(0)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(NaN)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(Infinity)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(true)).toBe(false);
    expect(tsg.isPositiveIntegerOrString(null)).toBe(false);
});

test('is negative number or nonempty string', () => {
    expect(tsg.isNegativeOrString('')).toBe(false);
    expect(tsg.isNegativeOrString('a')).toBe(true);
    expect(tsg.isNegativeOrString('1')).toBe(true);
    expect(tsg.isNegativeOrString(1)).toBe(false);
    expect(tsg.isNegativeOrString(1.1)).toBe(false);
    expect(tsg.isNegativeOrString('1')).toBe(true);
    expect(tsg.isNegativeOrString(-1)).toBe(true);
    expect(tsg.isNegativeOrString(-1.1)).toBe(true);
    expect(tsg.isNegativeOrString(0)).toBe(false);
    expect(tsg.isNegativeOrString(NaN)).toBe(false);
    expect(tsg.isNegativeOrString(Infinity)).toBe(false);
    expect(tsg.isNegativeOrString(true)).toBe(false);
    expect(tsg.isNegativeOrString(null)).toBe(false);
});

test('is negative integer or nonempty string', () => {
    expect(tsg.isNegativeIntegerOrString('')).toBe(false);
    expect(tsg.isNegativeIntegerOrString('a')).toBe(true);
    expect(tsg.isNegativeIntegerOrString('1')).toBe(true);
    expect(tsg.isNegativeIntegerOrString(1)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrString('1')).toBe(true);
    expect(tsg.isNegativeIntegerOrString(-1)).toBe(true);
    expect(tsg.isNegativeIntegerOrString(-1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(0)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(NaN)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(Infinity)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(true)).toBe(false);
    expect(tsg.isNegativeIntegerOrString(null)).toBe(false);
});

test('is number different from zero or nonempty string', () => {
    expect(tsg.isNotZeroOrString('')).toBe(false);
    expect(tsg.isNotZeroOrString('a')).toBe(true);
    expect(tsg.isNotZeroOrString('1')).toBe(true);
    expect(tsg.isNotZeroOrString(1)).toBe(true);
    expect(tsg.isNotZeroOrString(1.1)).toBe(true);
    expect(tsg.isNotZeroOrString('1')).toBe(true);
    expect(tsg.isNotZeroOrString(-1)).toBe(true);
    expect(tsg.isNotZeroOrString(-1.1)).toBe(true);
    expect(tsg.isNotZeroOrString(0)).toBe(false);
    expect(tsg.isNotZeroOrString(NaN)).toBe(false);
    expect(tsg.isNotZeroOrString(Infinity)).toBe(false);
    expect(tsg.isNotZeroOrString(true)).toBe(false);
    expect(tsg.isNotZeroOrString(null)).toBe(false);
});

test('is number or string', () => {
    expect(tsg.isNumberOrAnyString('')).toBe(true);
    expect(tsg.isNumberOrAnyString('a')).toBe(true);
    expect(tsg.isNumberOrAnyString('1')).toBe(true);
    expect(tsg.isNumberOrAnyString(1)).toBe(true);
    expect(tsg.isNumberOrAnyString(1.1)).toBe(true);
    expect(tsg.isNumberOrAnyString('1')).toBe(true);
    expect(tsg.isNumberOrAnyString(-1)).toBe(true);
    expect(tsg.isNumberOrAnyString(-1.1)).toBe(true);
    expect(tsg.isNumberOrAnyString(0)).toBe(true);
    expect(tsg.isNumberOrAnyString(NaN)).toBe(true);
    expect(tsg.isNumberOrAnyString(Infinity)).toBe(true);
    expect(tsg.isNumberOrAnyString(true)).toBe(false);
    expect(tsg.isNumberOrAnyString(null)).toBe(false);
});

test('is integer or string', () => {
    expect(tsg.isIntegerOrAnyString('')).toBe(true);
    expect(tsg.isIntegerOrAnyString('a')).toBe(true);
    expect(tsg.isIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isIntegerOrAnyString(1)).toBe(true);
    expect(tsg.isIntegerOrAnyString(1.1)).toBe(false);
    expect(tsg.isIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isIntegerOrAnyString(-1)).toBe(true);
    expect(tsg.isIntegerOrAnyString(-1.1)).toBe(false);
    expect(tsg.isIntegerOrAnyString(0)).toBe(true);
    expect(tsg.isIntegerOrAnyString(NaN)).toBe(false);
    expect(tsg.isIntegerOrAnyString(Infinity)).toBe(false);
    expect(tsg.isIntegerOrAnyString(true)).toBe(false);
    expect(tsg.isIntegerOrAnyString(null)).toBe(false);
});

test('is finite number or string', () => {
    expect(tsg.isFiniteOrAnyString('')).toBe(true);
    expect(tsg.isFiniteOrAnyString('a')).toBe(true);
    expect(tsg.isFiniteOrAnyString('1')).toBe(true);
    expect(tsg.isFiniteOrAnyString(1)).toBe(true);
    expect(tsg.isFiniteOrAnyString(1.1)).toBe(true);
    expect(tsg.isFiniteOrAnyString('1')).toBe(true);
    expect(tsg.isFiniteOrAnyString(-1)).toBe(true);
    expect(tsg.isFiniteOrAnyString(-1.1)).toBe(true);
    expect(tsg.isFiniteOrAnyString(0)).toBe(true);
    expect(tsg.isFiniteOrAnyString(NaN)).toBe(false);
    expect(tsg.isFiniteOrAnyString(Infinity)).toBe(false);
    expect(tsg.isFiniteOrAnyString(true)).toBe(false);
    expect(tsg.isFiniteOrAnyString(null)).toBe(false);
});

test('is positive number or string', () => {
    expect(tsg.isPositiveOrAnyString('')).toBe(true);
    expect(tsg.isPositiveOrAnyString('a')).toBe(true);
    expect(tsg.isPositiveOrAnyString('1')).toBe(true);
    expect(tsg.isPositiveOrAnyString(1)).toBe(true);
    expect(tsg.isPositiveOrAnyString(1.1)).toBe(true);
    expect(tsg.isPositiveOrAnyString('1')).toBe(true);
    expect(tsg.isPositiveOrAnyString(-1)).toBe(false);
    expect(tsg.isPositiveOrAnyString(-1.1)).toBe(false);
    expect(tsg.isPositiveOrAnyString(0)).toBe(false);
    expect(tsg.isPositiveOrAnyString(NaN)).toBe(false);
    expect(tsg.isPositiveOrAnyString(Infinity)).toBe(false);
    expect(tsg.isPositiveOrAnyString(true)).toBe(false);
    expect(tsg.isPositiveOrAnyString(null)).toBe(false);
});

test('is positive integer or string', () => {
    expect(tsg.isPositiveIntegerOrAnyString('')).toBe(true);
    expect(tsg.isPositiveIntegerOrAnyString('a')).toBe(true);
    expect(tsg.isPositiveIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isPositiveIntegerOrAnyString(1)).toBe(true);
    expect(tsg.isPositiveIntegerOrAnyString(1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isPositiveIntegerOrAnyString(-1)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(-1.1)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(0)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(NaN)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(Infinity)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(true)).toBe(false);
    expect(tsg.isPositiveIntegerOrAnyString(null)).toBe(false);
});

test('is negative number or string', () => {
    expect(tsg.isNegativeOrAnyString('')).toBe(true);
    expect(tsg.isNegativeOrAnyString('a')).toBe(true);
    expect(tsg.isNegativeOrAnyString('1')).toBe(true);
    expect(tsg.isNegativeOrAnyString(1)).toBe(false);
    expect(tsg.isNegativeOrAnyString(1.1)).toBe(false);
    expect(tsg.isNegativeOrAnyString('1')).toBe(true);
    expect(tsg.isNegativeOrAnyString(-1)).toBe(true);
    expect(tsg.isNegativeOrAnyString(-1.1)).toBe(true);
    expect(tsg.isNegativeOrAnyString(0)).toBe(false);
    expect(tsg.isNegativeOrAnyString(NaN)).toBe(false);
    expect(tsg.isNegativeOrAnyString(Infinity)).toBe(false);
    expect(tsg.isNegativeOrAnyString(true)).toBe(false);
    expect(tsg.isNegativeOrAnyString(null)).toBe(false);
});

test('is negative integer or string', () => {
    expect(tsg.isNegativeIntegerOrAnyString('')).toBe(true);
    expect(tsg.isNegativeIntegerOrAnyString('a')).toBe(true);
    expect(tsg.isNegativeIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isNegativeIntegerOrAnyString(1)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString('1')).toBe(true);
    expect(tsg.isNegativeIntegerOrAnyString(-1)).toBe(true);
    expect(tsg.isNegativeIntegerOrAnyString(-1.1)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(0)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(NaN)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(Infinity)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(true)).toBe(false);
    expect(tsg.isNegativeIntegerOrAnyString(null)).toBe(false);
});

test('is number different from zero or string', () => {
    expect(tsg.isNotZeroOrAnyString('')).toBe(true);
    expect(tsg.isNotZeroOrAnyString('a')).toBe(true);
    expect(tsg.isNotZeroOrAnyString('1')).toBe(true);
    expect(tsg.isNotZeroOrAnyString(1)).toBe(true);
    expect(tsg.isNotZeroOrAnyString(1.1)).toBe(true);
    expect(tsg.isNotZeroOrAnyString('1')).toBe(true);
    expect(tsg.isNotZeroOrAnyString(-1)).toBe(true);
    expect(tsg.isNotZeroOrAnyString(-1.1)).toBe(true);
    expect(tsg.isNotZeroOrAnyString(0)).toBe(false);
    expect(tsg.isNotZeroOrAnyString(NaN)).toBe(false);
    expect(tsg.isNotZeroOrAnyString(Infinity)).toBe(false);
    expect(tsg.isNotZeroOrAnyString(true)).toBe(false);
    expect(tsg.isNotZeroOrAnyString(null)).toBe(false);
});

test('is boolean', () => {
    expect(tsg.isBoolean(true)).toBe(true);
    expect(tsg.isBoolean(false)).toBe(true);
    expect(tsg.isBoolean('')).toBe(false);
    expect(tsg.isBoolean('a')).toBe(false);
    expect(tsg.isBoolean('1')).toBe(false);
    expect(tsg.isBoolean(1)).toBe(false);
    expect(tsg.isBoolean(0)).toBe(false);
    expect(tsg.isBoolean(NaN)).toBe(false);
    expect(tsg.isBoolean(null)).toBe(false);
    expect(tsg.isBoolean(undefined)).toBe(false);
});

test('is truthy', () => {
    expect(tsg.isTruthy(true)).toBe(true);
    expect(tsg.isTruthy(false)).toBe(false);
    expect(tsg.isTruthy('')).toBe(false);
    expect(tsg.isTruthy('a')).toBe(true);
    expect(tsg.isTruthy(null)).toBe(false);
    expect(tsg.isTruthy(undefined)).toBe(false);
    expect(tsg.isTruthy(0)).toBe(false);
    expect(tsg.isTruthy(1)).toBe(true);
    expect(tsg.isTruthy(NaN)).toBe(false);
});

test('is falsy', () => {
    expect(tsg.isFalsy(true)).toBe(false);
    expect(tsg.isFalsy(false)).toBe(true);
    expect(tsg.isFalsy('')).toBe(true);
    expect(tsg.isFalsy('a')).toBe(false);
    expect(tsg.isFalsy(null)).toBe(true);
    expect(tsg.isFalsy(undefined)).toBe(true);
    expect(tsg.isFalsy(0)).toBe(true);
    expect(tsg.isFalsy(1)).toBe(false);
    expect(tsg.isFalsy(NaN)).toBe(true);
});

test('is boolean or null', () => {
    expect(tsg.isBooleanOrNull(true)).toBe(true);
    expect(tsg.isBooleanOrNull(false)).toBe(true);
    expect(tsg.isBooleanOrNull('')).toBe(false);
    expect(tsg.isBooleanOrNull('a')).toBe(false);
    expect(tsg.isBooleanOrNull('1')).toBe(false);
    expect(tsg.isBooleanOrNull(1)).toBe(false);
    expect(tsg.isBooleanOrNull(0)).toBe(false);
    expect(tsg.isBooleanOrNull(NaN)).toBe(false);
    expect(tsg.isBooleanOrNull(null)).toBe(true);
    expect(tsg.isBooleanOrNull(undefined)).toBe(false);
});

test('is true or null', () => {
    expect(tsg.isTrueOrNull(true)).toBe(true);
    expect(tsg.isTrueOrNull(false)).toBe(false);
    expect(tsg.isTrueOrNull('')).toBe(false);
    expect(tsg.isTrueOrNull('a')).toBe(false);
    expect(tsg.isTrueOrNull('1')).toBe(false);
    expect(tsg.isTrueOrNull(1)).toBe(false);
    expect(tsg.isTrueOrNull(0)).toBe(false);
    expect(tsg.isTrueOrNull(NaN)).toBe(false);
    expect(tsg.isTrueOrNull(null)).toBe(true);
    expect(tsg.isTrueOrNull(undefined)).toBe(false);
});

test('is false or null', () => {
    expect(tsg.isFalseOrNull(true)).toBe(false);
    expect(tsg.isFalseOrNull(false)).toBe(true);
    expect(tsg.isFalseOrNull('')).toBe(false);
    expect(tsg.isFalseOrNull('a')).toBe(false);
    expect(tsg.isFalseOrNull('1')).toBe(false);
    expect(tsg.isFalseOrNull(1)).toBe(false);
    expect(tsg.isFalseOrNull(0)).toBe(false);
    expect(tsg.isFalseOrNull(NaN)).toBe(false);
    expect(tsg.isFalseOrNull(null)).toBe(true);
    expect(tsg.isFalseOrNull(undefined)).toBe(false);
});

test('is nullish', () => {
    expect(tsg.isNullish(null)).toBe(true);
    expect(tsg.isNullish(undefined)).toBe(true);
    expect(tsg.isNullish('')).toBe(false);
    expect(tsg.isNullish('a')).toBe(false);
    expect(tsg.isNullish('1')).toBe(false);
    expect(tsg.isNullish(1)).toBe(false);
    expect(tsg.isNullish(0)).toBe(false);
    expect(tsg.isNullish(NaN)).toBe(false);
});

test('asserts a condition', () => {
    expect(() => tsg.assert(true)).not.toThrow();
    expect(() => tsg.assert(false)).toThrow();
});

test('asserts instance', () => {
    expect(() => tsg.assertInstanceOf(new Date(), Date)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new Date(), Object)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new Date(), String)).toThrow();
    expect(() => tsg.assertInstanceOf(new Date(), Set)).toThrow();
    expect(() => tsg.assertInstanceOf(new Date(), Map)).toThrow();
    expect(() => tsg.assertInstanceOf(new Date(), Array)).toThrow();

    expect(() => tsg.assertInstanceOf(null, Date)).toThrow();
    expect(() => tsg.assertInstanceOf(undefined, Date)).toThrow();

    class MyTest {}
    expect(() => tsg.assertInstanceOf(new MyTest(), MyTest)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new MyTest(), Object)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new MyTest(), String)).toThrow();
    expect(() => tsg.assertInstanceOf(new MyTest(), Set)).toThrow();

    class MyError extends Error {}
    expect(() => tsg.assertInstanceOf(new MyError(), MyError)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new MyError(), Error)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new MyError(), Object)).not.toThrow();
    expect(() => tsg.assertInstanceOf(new MyError(), String)).toThrow();
    expect(() => tsg.assertInstanceOf(new MyError(), Set)).toThrow();
});

test('asserts number', () => {
    expect(() => tsg.assertNumber(1)).not.toThrow();
    expect(() => tsg.assertNumber(0)).not.toThrow();
    expect(() => tsg.assertNumber(NaN)).not.toThrow();
    expect(() => tsg.assertNumber('')).toThrow();
    expect(() => tsg.assertNumber('a')).toThrow();
    expect(() => tsg.assertNumber('1')).toThrow();
    expect(() => tsg.assertNumber(true)).toThrow();
    expect(() => tsg.assertNumber(false)).toThrow();
    expect(() => tsg.assertNumber(null)).toThrow();
    expect(() => tsg.assertNumber(undefined)).toThrow();
    expect(() => tsg.assertNumber(new Number())).toThrow();
});

test('asserts integer', () => {
    expect(() => tsg.assertInteger(1)).not.toThrow();
    expect(() => tsg.assertInteger(0)).not.toThrow();
    expect(() => tsg.assertInteger(-1)).not.toThrow();
    expect(() => tsg.assertInteger(1.1)).toThrow();
    expect(() => tsg.assertInteger(-1.1)).toThrow();
    expect(() => tsg.assertInteger(NaN)).toThrow();
    expect(() => tsg.assertInteger(Infinity)).toThrow();
    expect(() => tsg.assertInteger('')).toThrow();
    expect(() => tsg.assertInteger('a')).toThrow();
    expect(() => tsg.assertInteger('1')).toThrow();
    expect(() => tsg.assertInteger(true)).toThrow();
    expect(() => tsg.assertInteger(false)).toThrow();
    expect(() => tsg.assertInteger(null)).toThrow();
    expect(() => tsg.assertInteger(undefined)).toThrow();
    expect(() => tsg.assertInteger(new Number())).toThrow();
});

test('asserts finite number', () => {
    expect(() => tsg.assertFinite(1)).not.toThrow();
    expect(() => tsg.assertFinite(0)).not.toThrow();
    expect(() => tsg.assertFinite(-1)).not.toThrow();
    expect(() => tsg.assertFinite(1.1)).not.toThrow();
    expect(() => tsg.assertFinite(-1.1)).not.toThrow();
    expect(() => tsg.assertFinite(NaN)).toThrow();
    expect(() => tsg.assertFinite(Infinity)).toThrow();
    expect(() => tsg.assertFinite('')).toThrow();
    expect(() => tsg.assertFinite('a')).toThrow();
    expect(() => tsg.assertFinite('1')).toThrow();
    expect(() => tsg.assertFinite(true)).toThrow();
    expect(() => tsg.assertFinite(false)).toThrow();
    expect(() => tsg.assertFinite(null)).toThrow();
    expect(() => tsg.assertFinite(undefined)).toThrow();
    expect(() => tsg.assertFinite(new Number())).toThrow();
});

test('asserts positive number', () => {
    expect(() => tsg.assertPositiveNumber(1)).not.toThrow();
    expect(() => tsg.assertPositiveNumber(0)).toThrow();
    expect(() => tsg.assertPositiveNumber(-1)).toThrow();
    expect(() => tsg.assertPositiveNumber(1.1)).not.toThrow();
    expect(() => tsg.assertPositiveNumber(-1.1)).toThrow();
    expect(() => tsg.assertPositiveNumber(NaN)).toThrow();
    expect(() => tsg.assertPositiveNumber(Infinity)).toThrow();
    expect(() => tsg.assertPositiveNumber('')).toThrow();
    expect(() => tsg.assertPositiveNumber('a')).toThrow();
    expect(() => tsg.assertPositiveNumber('1')).toThrow();
    expect(() => tsg.assertPositiveNumber(true)).toThrow();
    expect(() => tsg.assertPositiveNumber(false)).toThrow();
    expect(() => tsg.assertPositiveNumber(null)).toThrow();
    expect(() => tsg.assertPositiveNumber(undefined)).toThrow();
    expect(() => tsg.assertPositiveNumber(new Number())).toThrow();
});

test('asserts positive integer', () => {
    expect(() => tsg.assertPositiveInteger(1)).not.toThrow();
    expect(() => tsg.assertPositiveInteger(0)).toThrow();
    expect(() => tsg.assertPositiveInteger(-1)).toThrow();
    expect(() => tsg.assertPositiveInteger(1.1)).toThrow();
    expect(() => tsg.assertPositiveInteger(-1.1)).toThrow();
    expect(() => tsg.assertPositiveInteger(NaN)).toThrow();
    expect(() => tsg.assertPositiveInteger(Infinity)).toThrow();
    expect(() => tsg.assertPositiveInteger('')).toThrow();
    expect(() => tsg.assertPositiveInteger('a')).toThrow();
    expect(() => tsg.assertPositiveInteger('1')).toThrow();
    expect(() => tsg.assertPositiveInteger(true)).toThrow();
    expect(() => tsg.assertPositiveInteger(false)).toThrow();
    expect(() => tsg.assertPositiveInteger(null)).toThrow();
    expect(() => tsg.assertPositiveInteger(undefined)).toThrow();
    expect(() => tsg.assertPositiveInteger(new Number())).toThrow();
});

test('asserts negative number', () => {
    expect(() => tsg.assertNegativeNumber(1)).toThrow();
    expect(() => tsg.assertNegativeNumber(0)).toThrow();
    expect(() => tsg.assertNegativeNumber(-1)).not.toThrow();
    expect(() => tsg.assertNegativeNumber(1.1)).toThrow();
    expect(() => tsg.assertNegativeNumber(-1.1)).not.toThrow();
    expect(() => tsg.assertNegativeNumber(NaN)).toThrow();
    expect(() => tsg.assertNegativeNumber(Infinity)).toThrow();
    expect(() => tsg.assertNegativeNumber('')).toThrow();
    expect(() => tsg.assertNegativeNumber('a')).toThrow();
    expect(() => tsg.assertNegativeNumber('1')).toThrow();
    expect(() => tsg.assertNegativeNumber(true)).toThrow();
    expect(() => tsg.assertNegativeNumber(false)).toThrow();
    expect(() => tsg.assertNegativeNumber(null)).toThrow();
    expect(() => tsg.assertNegativeNumber(undefined)).toThrow();
    expect(() => tsg.assertNegativeNumber(new Number())).toThrow();
});

test('asserts negative integer', () => {
    expect(() => tsg.assertNegativeInteger(1)).toThrow();
    expect(() => tsg.assertNegativeInteger(0)).toThrow();
    expect(() => tsg.assertNegativeInteger(-1)).not.toThrow();
    expect(() => tsg.assertNegativeInteger(1.1)).toThrow();
    expect(() => tsg.assertNegativeInteger(-1.1)).toThrow();
    expect(() => tsg.assertNegativeInteger(NaN)).toThrow();
    expect(() => tsg.assertNegativeInteger(Infinity)).toThrow();
    expect(() => tsg.assertNegativeInteger('')).toThrow();
    expect(() => tsg.assertNegativeInteger('a')).toThrow();
    expect(() => tsg.assertNegativeInteger('1')).toThrow();
    expect(() => tsg.assertNegativeInteger(true)).toThrow();
    expect(() => tsg.assertNegativeInteger(false)).toThrow();
    expect(() => tsg.assertNegativeInteger(null)).toThrow();
    expect(() => tsg.assertNegativeInteger(undefined)).toThrow();
    expect(() => tsg.assertNegativeInteger(new Number())).toThrow();
});

test('asserts number is not zero', () => {
    expect(() => tsg.assertNotZero(1)).not.toThrow();
    expect(() => tsg.assertNotZero(0)).toThrow();
    expect(() => tsg.assertNotZero(-1)).not.toThrow();
    expect(() => tsg.assertNotZero(1.1)).not.toThrow();
    expect(() => tsg.assertNotZero(-1.1)).not.toThrow();
    expect(() => tsg.assertNotZero(NaN)).toThrow();
    expect(() => tsg.assertNotZero(Infinity)).toThrow();
    expect(() => tsg.assertNotZero('')).toThrow();
    expect(() => tsg.assertNotZero('a')).toThrow();
    expect(() => tsg.assertNotZero('1')).toThrow();
    expect(() => tsg.assertNotZero(true)).toThrow();
    expect(() => tsg.assertNotZero(false)).toThrow();
    expect(() => tsg.assertNotZero(null)).toThrow();
    expect(() => tsg.assertNotZero(undefined)).toThrow();
    expect(() => tsg.assertNotZero(new Number())).toThrow();
});

test('asserts number or null', () => {
    expect(() => tsg.assertNumberOrNull(1)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(0)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(-1)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(-1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(NaN)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(Infinity)).not.toThrow();
    expect(() => tsg.assertNumberOrNull('')).toThrow();
    expect(() => tsg.assertNumberOrNull('a')).toThrow();
    expect(() => tsg.assertNumberOrNull('1')).toThrow();
    expect(() => tsg.assertNumberOrNull(true)).toThrow();
    expect(() => tsg.assertNumberOrNull(false)).toThrow();
    expect(() => tsg.assertNumberOrNull(null)).not.toThrow();
    expect(() => tsg.assertNumberOrNull(undefined)).toThrow();
    expect(() => tsg.assertNumberOrNull(new Number())).toThrow();
});

test('asserts integer or null', () => {
    expect(() => tsg.assertIntegerOrNull(1)).not.toThrow();
    expect(() => tsg.assertIntegerOrNull(0)).not.toThrow();
    expect(() => tsg.assertIntegerOrNull(-1)).not.toThrow();
    expect(() => tsg.assertIntegerOrNull(1.1)).toThrow();
    expect(() => tsg.assertIntegerOrNull(-1.1)).toThrow();
    expect(() => tsg.assertIntegerOrNull(NaN)).toThrow();
    expect(() => tsg.assertIntegerOrNull(Infinity)).toThrow();
    expect(() => tsg.assertIntegerOrNull('')).toThrow();
    expect(() => tsg.assertIntegerOrNull('a')).toThrow();
    expect(() => tsg.assertIntegerOrNull('1')).toThrow();
    expect(() => tsg.assertIntegerOrNull(true)).toThrow();
    expect(() => tsg.assertIntegerOrNull(false)).toThrow();
    expect(() => tsg.assertIntegerOrNull(null)).not.toThrow();
    expect(() => tsg.assertIntegerOrNull(undefined)).toThrow();
    expect(() => tsg.assertIntegerOrNull(new Number())).toThrow();
});

test('asserts finite number or null', () => {
    expect(() => tsg.assertFiniteOrNull(1)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(0)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(-1)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(-1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(NaN)).toThrow();
    expect(() => tsg.assertFiniteOrNull(Infinity)).toThrow();
    expect(() => tsg.assertFiniteOrNull('')).toThrow();
    expect(() => tsg.assertFiniteOrNull('a')).toThrow();
    expect(() => tsg.assertFiniteOrNull('1')).toThrow();
    expect(() => tsg.assertFiniteOrNull(true)).toThrow();
    expect(() => tsg.assertFiniteOrNull(false)).toThrow();
    expect(() => tsg.assertFiniteOrNull(null)).not.toThrow();
    expect(() => tsg.assertFiniteOrNull(undefined)).toThrow();
    expect(() => tsg.assertFiniteOrNull(new Number())).toThrow();
});

test('asserts positive number or null', () => {
    expect(() => tsg.assertPositiveOrNull(1)).not.toThrow();
    expect(() => tsg.assertPositiveOrNull(0)).toThrow();
    expect(() => tsg.assertPositiveOrNull(-1)).toThrow();
    expect(() => tsg.assertPositiveOrNull(1.1)).not.toThrow();
    expect(() => tsg.assertPositiveOrNull(-1.1)).toThrow();
    expect(() => tsg.assertPositiveOrNull(NaN)).toThrow();
    expect(() => tsg.assertPositiveOrNull(Infinity)).toThrow();
    expect(() => tsg.assertPositiveOrNull('')).toThrow();
    expect(() => tsg.assertPositiveOrNull('a')).toThrow();
    expect(() => tsg.assertPositiveOrNull('1')).toThrow();
    expect(() => tsg.assertPositiveOrNull(true)).toThrow();
    expect(() => tsg.assertPositiveOrNull(false)).toThrow();
    expect(() => tsg.assertPositiveOrNull(null)).not.toThrow();
    expect(() => tsg.assertPositiveOrNull(undefined)).toThrow();
    expect(() => tsg.assertPositiveOrNull(new Number())).toThrow();
});

test('asserts positive integer or null', () => {
    expect(() => tsg.assertPositiveIntegerOrNull(1)).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(0)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(-1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(-1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(NaN)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(Infinity)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull('')).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull('a')).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull('1')).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(true)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(false)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(null)).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(undefined)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrNull(new Number())).toThrow();
});

test('asserts negative number or null', () => {
    expect(() => tsg.assertNegativeOrNull(1)).toThrow();
    expect(() => tsg.assertNegativeOrNull(0)).toThrow();
    expect(() => tsg.assertNegativeOrNull(-1)).not.toThrow();
    expect(() => tsg.assertNegativeOrNull(1.1)).toThrow();
    expect(() => tsg.assertNegativeOrNull(-1.1)).not.toThrow();
    expect(() => tsg.assertNegativeOrNull(NaN)).toThrow();
    expect(() => tsg.assertNegativeOrNull(Infinity)).toThrow();
    expect(() => tsg.assertNegativeOrNull('')).toThrow();
    expect(() => tsg.assertNegativeOrNull('a')).toThrow();
    expect(() => tsg.assertNegativeOrNull('1')).toThrow();
    expect(() => tsg.assertNegativeOrNull(true)).toThrow();
    expect(() => tsg.assertNegativeOrNull(false)).toThrow();
    expect(() => tsg.assertNegativeOrNull(null)).not.toThrow();
    expect(() => tsg.assertNegativeOrNull(undefined)).toThrow();
    expect(() => tsg.assertNegativeOrNull(new Number())).toThrow();
});

test('asserts negative integer or null', () => {
    expect(() => tsg.assertNegativeIntegerOrNull(1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(0)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(-1)).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(-1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(NaN)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(Infinity)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull('')).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull('a')).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull('1')).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(true)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(false)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(null)).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(undefined)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrNull(new Number())).toThrow();
});

test('asserts finite number is not zero, or null', () => {
    expect(() => tsg.assertNotZeroOrNull(1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrNull(0)).toThrow();
    expect(() => tsg.assertNotZeroOrNull(-1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrNull(1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrNull(-1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrNull(NaN)).toThrow();
    expect(() => tsg.assertNotZeroOrNull(Infinity)).toThrow();
    expect(() => tsg.assertNotZeroOrNull('')).toThrow();
    expect(() => tsg.assertNotZeroOrNull('a')).toThrow();
    expect(() => tsg.assertNotZeroOrNull('1')).toThrow();
    expect(() => tsg.assertNotZeroOrNull(true)).toThrow();
    expect(() => tsg.assertNotZeroOrNull(false)).toThrow();
    expect(() => tsg.assertNotZeroOrNull(null)).not.toThrow();
    expect(() => tsg.assertNotZeroOrNull(undefined)).toThrow();
    expect(() => tsg.assertNotZeroOrNull(new Number())).toThrow();
});

test('asserts string', () => {
    expect(() => tsg.assertAnyString('')).not.toThrow();
    expect(() => tsg.assertAnyString('a')).not.toThrow();
    expect(() => tsg.assertAnyString('1')).not.toThrow();
    expect(() => tsg.assertAnyString(new String())).toThrow();
    expect(() => tsg.assertAnyString(0)).toThrow();
    expect(() => tsg.assertAnyString(-1)).toThrow();
    expect(() => tsg.assertAnyString(1.1)).toThrow();
    expect(() => tsg.assertAnyString(-1.1)).toThrow();
    expect(() => tsg.assertAnyString(NaN)).toThrow();
    expect(() => tsg.assertAnyString(Infinity)).toThrow();
    expect(() => tsg.assertAnyString(true)).toThrow();
    expect(() => tsg.assertAnyString(false)).toThrow();
    expect(() => tsg.assertAnyString(null)).toThrow();
    expect(() => tsg.assertAnyString(undefined)).toThrow();
});

test('asserts nonempty string', () => {
    expect(() => tsg.assertString('')).toThrow();
    expect(() => tsg.assertString('a')).not.toThrow();
    expect(() => tsg.assertString('1')).not.toThrow();
    expect(() => tsg.assertString(new String())).toThrow();
    expect(() => tsg.assertString(0)).toThrow();
    expect(() => tsg.assertString(-1)).toThrow();
    expect(() => tsg.assertString(1.1)).toThrow();
    expect(() => tsg.assertString(-1.1)).toThrow();
    expect(() => tsg.assertString(NaN)).toThrow();
    expect(() => tsg.assertString(Infinity)).toThrow();
    expect(() => tsg.assertString(true)).toThrow();
    expect(() => tsg.assertString(false)).toThrow();
    expect(() => tsg.assertString(null)).toThrow();
    expect(() => tsg.assertString(undefined)).toThrow();
});

test('asserts string or null', () => {
    expect(() => tsg.assertAnyStringOrNull('')).not.toThrow();
    expect(() => tsg.assertAnyStringOrNull('a')).not.toThrow();
    expect(() => tsg.assertAnyStringOrNull('1')).not.toThrow();
    expect(() => tsg.assertAnyStringOrNull(new String())).toThrow();
    expect(() => tsg.assertAnyStringOrNull(0)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(-1)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(1.1)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(-1.1)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(NaN)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(Infinity)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(true)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(false)).toThrow();
    expect(() => tsg.assertAnyStringOrNull(null)).not.toThrow();
    expect(() => tsg.assertAnyStringOrNull(undefined)).toThrow();
});

test('asserts nonempty string or null', () => {
    expect(() => tsg.assertStringOrNull('')).toThrow();
    expect(() => tsg.assertStringOrNull('a')).not.toThrow();
    expect(() => tsg.assertStringOrNull('1')).not.toThrow();
    expect(() => tsg.assertStringOrNull(new String())).toThrow();
    expect(() => tsg.assertStringOrNull(0)).toThrow();
    expect(() => tsg.assertStringOrNull(-1)).toThrow();
    expect(() => tsg.assertStringOrNull(1.1)).toThrow();
    expect(() => tsg.assertStringOrNull(-1.1)).toThrow();
    expect(() => tsg.assertStringOrNull(NaN)).toThrow();
    expect(() => tsg.assertStringOrNull(Infinity)).toThrow();
    expect(() => tsg.assertStringOrNull(true)).toThrow();
    expect(() => tsg.assertStringOrNull(false)).toThrow();
    expect(() => tsg.assertStringOrNull(null)).not.toThrow();
    expect(() => tsg.assertStringOrNull(undefined)).toThrow();
});

test('asserts number or nonempty string', () => {
    expect(() => tsg.assertNumberOrString(0)).not.toThrow();
    expect(() => tsg.assertNumberOrString(-1)).not.toThrow();
    expect(() => tsg.assertNumberOrString(1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrString(-1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrString(NaN)).not.toThrow();
    expect(() => tsg.assertNumberOrString(Infinity)).not.toThrow();
    expect(() => tsg.assertNumberOrString('')).toThrow();
    expect(() => tsg.assertNumberOrString('a')).not.toThrow();
    expect(() => tsg.assertNumberOrString('1')).not.toThrow();
    expect(() => tsg.assertNumberOrString(new String())).toThrow();
    expect(() => tsg.assertNumberOrString(new Number())).toThrow();
    expect(() => tsg.assertNumberOrString(true)).toThrow();
    expect(() => tsg.assertNumberOrString(false)).toThrow();
    expect(() => tsg.assertNumberOrString(null)).toThrow();
    expect(() => tsg.assertNumberOrString(undefined)).toThrow();
});

test('asserts integer or nonempty string', () => {
    expect(() => tsg.assertIntegerOrString(0)).not.toThrow();
    expect(() => tsg.assertIntegerOrString(-1)).not.toThrow();
    expect(() => tsg.assertIntegerOrString(1.1)).toThrow();
    expect(() => tsg.assertIntegerOrString(-1.1)).toThrow();
    expect(() => tsg.assertIntegerOrString(NaN)).toThrow();
    expect(() => tsg.assertIntegerOrString(Infinity)).toThrow();
    expect(() => tsg.assertIntegerOrString('')).toThrow();
    expect(() => tsg.assertIntegerOrString('a')).not.toThrow();
    expect(() => tsg.assertIntegerOrString('1')).not.toThrow();
    expect(() => tsg.assertIntegerOrString(new String())).toThrow();
    expect(() => tsg.assertIntegerOrString(true)).toThrow();
    expect(() => tsg.assertIntegerOrString(false)).toThrow();
    expect(() => tsg.assertIntegerOrString(null)).toThrow();
    expect(() => tsg.assertIntegerOrString(undefined)).toThrow();
});

test('asserts finite number or nonempty string', () => {
    expect(() => tsg.assertFiniteOrString(0)).not.toThrow();
    expect(() => tsg.assertFiniteOrString(-1)).not.toThrow();
    expect(() => tsg.assertFiniteOrString(1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrString(-1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrString(NaN)).toThrow();
    expect(() => tsg.assertFiniteOrString(Infinity)).toThrow();
    expect(() => tsg.assertFiniteOrString('')).toThrow();
    expect(() => tsg.assertFiniteOrString('a')).not.toThrow();
    expect(() => tsg.assertFiniteOrString('1')).not.toThrow();
    expect(() => tsg.assertFiniteOrString(new String())).toThrow();
    expect(() => tsg.assertFiniteOrString(true)).toThrow();
    expect(() => tsg.assertFiniteOrString(false)).toThrow();
    expect(() => tsg.assertFiniteOrString(null)).toThrow();
    expect(() => tsg.assertFiniteOrString(undefined)).toThrow();
});

test('asserts positive number or nonempty string', () => {
    expect(() => tsg.assertPositiveOrString(0)).toThrow();
    expect(() => tsg.assertPositiveOrString(1)).not.toThrow();
    expect(() => tsg.assertPositiveOrString(-1)).toThrow();
    expect(() => tsg.assertPositiveOrString(1.1)).not.toThrow();
    expect(() => tsg.assertPositiveOrString(-1.1)).toThrow();
    expect(() => tsg.assertPositiveOrString(NaN)).toThrow();
    expect(() => tsg.assertPositiveOrString(Infinity)).toThrow();
    expect(() => tsg.assertPositiveOrString('')).toThrow();
    expect(() => tsg.assertPositiveOrString('a')).not.toThrow();
    expect(() => tsg.assertPositiveOrString('1')).not.toThrow();
    expect(() => tsg.assertPositiveOrString(new String())).toThrow();
    expect(() => tsg.assertPositiveOrString(true)).toThrow();
    expect(() => tsg.assertPositiveOrString(false)).toThrow();
    expect(() => tsg.assertPositiveOrString(null)).toThrow();
    expect(() => tsg.assertPositiveOrString(undefined)).toThrow();
});

test('asserts positive integer or nonempty string', () => {
    expect(() => tsg.assertPositiveIntegerOrString(0)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(1)).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(-1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(-1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(NaN)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(Infinity)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString('')).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString('a')).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrString('1')).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(new String())).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(true)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(false)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(null)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrString(undefined)).toThrow();
});

test('asserts negative number or nonempty string', () => {
    expect(() => tsg.assertNegativeOrString(0)).toThrow();
    expect(() => tsg.assertNegativeOrString(1)).toThrow();
    expect(() => tsg.assertNegativeOrString(-1)).not.toThrow();
    expect(() => tsg.assertNegativeOrString(1.1)).toThrow();
    expect(() => tsg.assertNegativeOrString(-1.1)).not.toThrow();
    expect(() => tsg.assertNegativeOrString(NaN)).toThrow();
    expect(() => tsg.assertNegativeOrString(Infinity)).toThrow();
    expect(() => tsg.assertNegativeOrString('')).toThrow();
    expect(() => tsg.assertNegativeOrString('a')).not.toThrow();
    expect(() => tsg.assertNegativeOrString('1')).not.toThrow();
    expect(() => tsg.assertNegativeOrString(new String())).toThrow();
    expect(() => tsg.assertNegativeOrString(true)).toThrow();
    expect(() => tsg.assertNegativeOrString(false)).toThrow();
    expect(() => tsg.assertNegativeOrString(null)).toThrow();
    expect(() => tsg.assertNegativeOrString(undefined)).toThrow();
});

test('asserts negative integer or nonempty string', () => {
    expect(() => tsg.assertNegativeIntegerOrString(0)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(-1)).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(-1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(NaN)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(Infinity)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString('')).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString('a')).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrString('1')).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(new String())).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(true)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(false)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(null)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrString(undefined)).toThrow();
});

test('asserts finite number different from zero or nonempty string', () => {
    expect(() => tsg.assertNotZeroOrString(0)).toThrow();
    expect(() => tsg.assertNotZeroOrString(1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrString(-1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrString(1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrString(-1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrString(NaN)).toThrow();
    expect(() => tsg.assertNotZeroOrString(Infinity)).toThrow();
    expect(() => tsg.assertNotZeroOrString('')).toThrow();
    expect(() => tsg.assertNotZeroOrString('a')).not.toThrow();
    expect(() => tsg.assertNotZeroOrString('1')).not.toThrow();
    expect(() => tsg.assertNotZeroOrString(new String())).toThrow();
    expect(() => tsg.assertNotZeroOrString(true)).toThrow();
    expect(() => tsg.assertNotZeroOrString(false)).toThrow();
    expect(() => tsg.assertNotZeroOrString(null)).toThrow();
    expect(() => tsg.assertNotZeroOrString(undefined)).toThrow();
});

test('asserts number or string', () => {
    expect(() => tsg.assertNumberOrAnyString(0)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(-1.1)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(NaN)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(Infinity)).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString('')).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertNumberOrAnyString(new String())).toThrow();
    expect(() => tsg.assertNumberOrAnyString(true)).toThrow();
    expect(() => tsg.assertNumberOrAnyString(false)).toThrow();
    expect(() => tsg.assertNumberOrAnyString(null)).toThrow();
    expect(() => tsg.assertNumberOrAnyString(undefined)).toThrow();
});

test('asserts integer or string', () => {
    expect(() => tsg.assertIntegerOrAnyString(0)).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString(1.1)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(-1.1)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString('')).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertIntegerOrAnyString(new String())).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(true)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(false)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(null)).toThrow();
    expect(() => tsg.assertIntegerOrAnyString(undefined)).toThrow();
});

test('asserts finite number or string', () => {
    expect(() => tsg.assertFiniteOrAnyString(0)).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(-1.1)).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertFiniteOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertFiniteOrAnyString('')).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertFiniteOrAnyString(new String())).toThrow();
    expect(() => tsg.assertFiniteOrAnyString(true)).toThrow();
    expect(() => tsg.assertFiniteOrAnyString(false)).toThrow();
    expect(() => tsg.assertFiniteOrAnyString(null)).toThrow();
    expect(() => tsg.assertFiniteOrAnyString(undefined)).toThrow();
});

test('asserts positive number or string', () => {
    expect(() => tsg.assertPositiveOrAnyString(0)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertPositiveOrAnyString(-1)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(1.1)).not.toThrow();
    expect(() => tsg.assertPositiveOrAnyString(-1.1)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString('')).not.toThrow();
    expect(() => tsg.assertPositiveOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertPositiveOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertPositiveOrAnyString(new String())).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(true)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(false)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(null)).toThrow();
    expect(() => tsg.assertPositiveOrAnyString(undefined)).toThrow();
});

test('asserts positive integer or string', () => {
    expect(() => tsg.assertPositiveIntegerOrAnyString(0)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(-1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(-1.1)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString('')).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(new String())).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(true)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(false)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(null)).toThrow();
    expect(() => tsg.assertPositiveIntegerOrAnyString(undefined)).toThrow();
});

test('asserts negative number or string', () => {
    expect(() => tsg.assertNegativeOrAnyString(0)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(1)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertNegativeOrAnyString(1.1)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(-1.1)).not.toThrow();
    expect(() => tsg.assertNegativeOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString('')).not.toThrow();
    expect(() => tsg.assertNegativeOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertNegativeOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertNegativeOrAnyString(new String())).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(true)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(false)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(null)).toThrow();
    expect(() => tsg.assertNegativeOrAnyString(undefined)).toThrow();
});

test('asserts negative integer or string', () => {
    expect(() => tsg.assertNegativeIntegerOrAnyString(0)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(-1.1)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString('')).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(new String())).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(true)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(false)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(null)).toThrow();
    expect(() => tsg.assertNegativeIntegerOrAnyString(undefined)).toThrow();
});

test('asserts finite number different from zero or string', () => {
    expect(() => tsg.assertNotZeroOrAnyString(0)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(-1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(-1.1)).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(NaN)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(Infinity)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString('')).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString('a')).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString('1')).not.toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(new String())).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(true)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(false)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(null)).toThrow();
    expect(() => tsg.assertNotZeroOrAnyString(undefined)).toThrow();
});

test('asserts boolean or null', () => {
    expect(() => tsg.assertBooleanOrNull(true)).not.toThrow();
    expect(() => tsg.assertBooleanOrNull(false)).not.toThrow();
    expect(() => tsg.assertBooleanOrNull(0)).toThrow();
    expect(() => tsg.assertBooleanOrNull(1)).toThrow();
    expect(() => tsg.assertBooleanOrNull(NaN)).toThrow();
    expect(() => tsg.assertBooleanOrNull(Infinity)).toThrow();
    expect(() => tsg.assertBooleanOrNull('')).toThrow();
    expect(() => tsg.assertBooleanOrNull('a')).toThrow();
    expect(() => tsg.assertBooleanOrNull('1')).toThrow();
    expect(() => tsg.assertBooleanOrNull(new Boolean())).toThrow();
    expect(() => tsg.assertBooleanOrNull(null)).not.toThrow();
    expect(() => tsg.assertBooleanOrNull(undefined)).toThrow();
});

test('asserts true or null', () => {
    expect(() => tsg.assertTrueOrNull(true)).not.toThrow();
    expect(() => tsg.assertTrueOrNull(false)).toThrow();
    expect(() => tsg.assertTrueOrNull(0)).toThrow();
    expect(() => tsg.assertTrueOrNull(1)).toThrow();
    expect(() => tsg.assertTrueOrNull(NaN)).toThrow();
    expect(() => tsg.assertTrueOrNull(Infinity)).toThrow();
    expect(() => tsg.assertTrueOrNull('')).toThrow();
    expect(() => tsg.assertTrueOrNull('a')).toThrow();
    expect(() => tsg.assertTrueOrNull('1')).toThrow();
    expect(() => tsg.assertTrueOrNull(new Boolean())).toThrow();
    expect(() => tsg.assertTrueOrNull(null)).not.toThrow();
    expect(() => tsg.assertTrueOrNull(undefined)).toThrow();
});

test('asserts false or null', () => {
    expect(() => tsg.assertFalseOrNull(true)).toThrow();
    expect(() => tsg.assertFalseOrNull(false)).not.toThrow();
    expect(() => tsg.assertFalseOrNull(0)).toThrow();
    expect(() => tsg.assertFalseOrNull(1)).toThrow();
    expect(() => tsg.assertFalseOrNull(NaN)).toThrow();
    expect(() => tsg.assertFalseOrNull(Infinity)).toThrow();
    expect(() => tsg.assertFalseOrNull('')).toThrow();
    expect(() => tsg.assertFalseOrNull('a')).toThrow();
    expect(() => tsg.assertFalseOrNull('1')).toThrow();
    expect(() => tsg.assertFalseOrNull(new Boolean())).toThrow();
    expect(() => tsg.assertFalseOrNull(null)).not.toThrow();
    expect(() => tsg.assertFalseOrNull(undefined)).toThrow();
});

test('asserts nullish', () => {
    expect(() => tsg.assertNullish(null)).not.toThrow();
    expect(() => tsg.assertNullish(undefined)).not.toThrow();
    expect(() => tsg.assertNullish(0)).toThrow();
    expect(() => tsg.assertNullish(1)).toThrow();
    expect(() => tsg.assertNullish(NaN)).toThrow();
    expect(() => tsg.assertNullish(Infinity)).toThrow();
    expect(() => tsg.assertNullish('')).toThrow();
    expect(() => tsg.assertNullish('a')).toThrow();
    expect(() => tsg.assertNullish('1')).toThrow();
    expect(() => tsg.assertNullish(new Boolean())).toThrow();
    expect(() => tsg.assertNullish(true)).toThrow();
    expect(() => tsg.assertNullish(false)).toThrow();
});

test('converts a value to null if it does not pass a type guard', () => {
    expect(tsg.toNull('', tsg.isNumber)).toBe(null);
    expect(tsg.toNull(0, tsg.isString)).toBe(null);
    expect(tsg.toNull('', tsg.isString)).toBe(null);
    expect(tsg.toNull('a', tsg.isNumber)).toBe(null);
    expect(tsg.toNull(0, tsg.isPositiveNumber)).toBe(null);
    expect(tsg.toNull(0, tsg.isPositiveInteger)).toBe(null);
    expect(tsg.toNull(0, tsg.isNegativeNumber)).toBe(null);
    expect(tsg.toNull(0, tsg.isNegativeInteger)).toBe(null);
    
    expect(tsg.toNull(0, tsg.isInteger)).toBe(0);
    expect(tsg.toNull('a', tsg.isString)).toBe('a');
    expect(tsg.toNull(0, tsg.isNumber)).toBe(0);
    expect(tsg.toNull(0, tsg.isFiniteNumber)).toBe(0);
});