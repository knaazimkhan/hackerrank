const fn = (x1, v1, x2, v2) => {
	let s1, s2;
	console.log(x2 > x1 && v2 > v1, x1 < 0, x1 > 10000, x2 > 10000, v1 < 0, v1 > 10000, v2 < 0, v2 > 10000);
	if (
		(x2 > x1 && v2 > v1) ||
		x1 < 0 ||
		x1 > 10000 ||
		x2 > 10000 ||
		v1 < 0 ||
		v1 > 10000 ||
		v2 < 0 ||
		v2 > 10000
	)
		return 'NO';
	let j = 0;
	do {
		s1 = x1 + v1;
		s2 = x2 + v2;
		console.log(s1, s2, j);
		if (s1 !== s2) {
			x1 = s1;
			x2 = s2;
		}
		j++;
	} while (s1 !== s2 && s2 > s1 && j < 10000);

	return s1 === s2 ? 'YES' : 'NO';
};

console.log(fn(4523, 8092, 9419, 8076));
