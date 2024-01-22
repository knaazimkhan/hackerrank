const fn = (s, d, m) => {
	let c = 0;
	for (let i = 0; m <= s.length; i++) {
		let sum = 0;
		console.log(m, s.length, m < s.length);
		for (let j = i; j < m; j++) {
			sum += s[j];
			console.log('j = ', j);
		}
		if (sum === d) {
			c++;
		}
		console.log({ sum, d, c });
		m++;
	}
	return c;
};

// console.log(fn([1, 2, 1, 3, 2], 3, 2));

const fn2 = (s, d, m) => {
	let c = 0;
	for (let i = 0; i < s.length; i++) {
		const sum = s.slice(i, m + i).reduce((s, el) => s + el, 0);
		if (d === sum) {
			c++;
		}
	}
  return c;
};

console.log(fn2([4], 4, 1));
