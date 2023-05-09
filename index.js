function stringLength(string) {
	if (typeof string !== 'string') {
		throw new Error('argument must be a string');
	}

	if (string.length < 1 || string.length > 10) {
		throw new Error('string must be between 1 and 10 characters long');
	}
	return str.length;
}
