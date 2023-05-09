const { stringLength, reverseString } = require('../index');

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
