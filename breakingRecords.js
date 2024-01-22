const fn = scores => {
	let hs = (ls = scores[0]),
		mx = (mn = 0);
	for (let i = 0; i < scores.length; i++) {
		const el = scores[i];
		if (el > hs) {
			hs = el;
			mx++;
		}
		if (el < ls) {
			ls = el;
			mn++;
		}
	}
	return { mx, mn };
};

console.log(fn([10, 5, 20, 20, 4, 5, 2, 25, 1]));
