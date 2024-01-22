const fn = year => {
	if (year >= 1700 && year <= 1917) {
		console.log('if');
		return year % 4 === 0 ? '12.09.' + year : '13.09.' + year;
	} else {
		console.log('el');
		if (year % 4 === 0 && year % 100 !== 0) {
			return '12.09.' + year;
		} else if (year % 400 === 0) {
			return '12.09.' + year;
		} else return '13.09.' + year;
	}
};

console.log(fn(2100));