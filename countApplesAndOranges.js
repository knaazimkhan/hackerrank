const fn = (s, t, a, b, apples, oranges) => {
	const aa = apples.map(apple => apple + a).filter(a => a >= s && a <= t);
	const oo = oranges.map(orange => orange + b).filter(o => o >= s && o <= t);
	console.log(aa.length, '\n', oo.length);
};

const s = 7,
	t = 10,
	a = 4,
	b = 12,
	apples = [2, 3, -4],
	oranges = [3, -2, -4];

fn(s, t, a, b, apples, oranges);
