function stringLength(string) {
	if (typeof string !== 'string') {
		throw new Error('argument must be a string');
	}

	if (string.length < 1 || string.length > 10) {
		throw new Error('string must be between 1 and 10 characters long');
	}
	return string.length;
}

function reverseString(string) {
	return string.split('').reverse().join('');
}

class Calculator {
	constructor() {
		this.result = 0;
	}

	add(num) {
		this.result += num;
		return this;
	}

	subtract(num) {
		this.result -= num;
		return this;
	}

	divide(num) {
		this.result /= num;
		return this;
	}

	multiply(num) {
		this.result *= num;
		return this;
	}
}

function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
	stringLength,
	reverseString,
	Calculator,
	capitalize,
};
