const { stringLength, reverseString, Calculator } = require('../index');

describe('stringLength', () => {
	test('returns the length of a string', () => {
		expect(stringLength('hello')).toBe(5);
		expect(stringLength('sdf')).toBe(3);
	});

	test('throws an error if the argument is not a string', () => {
		expect(() => stringLength(123)).toThrow('argument must be a string');
	});

	test('throws an error if the string is longer than 10 characters', () => {
		expect(() => stringLength('12345678901')).toThrow(
			'string must be between 1 and 10 characters long'
		);
	});

	test('throws an error if the string is shorter than 1 character', () => {
		expect(() => stringLength('')).toThrow(
			'string must be between 1 and 10 characters long'
		);
	});
});

// Reverse String

describe('reverseString', () => {
	test('returns a reversed string', () => {
		expect(reverseString('hello')).toBe('olleh');
		expect(reverseString('sdf')).toBe('fds');
	});
});

// Calculator

describe('Calculator', () => {
	let calculator;
	beforeEach(() => {
		calculator = new Calculator();
	});

	test('adds numbers', () => {
		expect(calculator.add(5).result).toBe(5);
		expect(calculator.add(5).add(5).result).toBe(15);
	});

	test('subtracts numbers', () => {
		expect(calculator.subtract(5).result).toBe(-5);
		expect(calculator.subtract(5).subtract(5).result).toBe(-15);
	});

	test('multiplies numbers', () => {
		expect(calculator.multiply(5).result).toBe(0);
		expect(calculator.multiply(5).multiply(5).result).toBe(0);
	});

	test('divides numbers', () => {
		expect(calculator.divide(5).result).toBe(0);
		expect(calculator.divide(5).divide(5).result).toBe(0);
	});
});

// Capitalize

describe('capitalize', () => {
	test('capitalizes the first letter of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
		expect(capitalize('sdfa')).toBe('Sdfa');
	});
});
