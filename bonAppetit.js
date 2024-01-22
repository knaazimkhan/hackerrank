const fn = (bill, k, b) => {
	const sum = bill.reduce((s, b) => s + b, 0);
	if (b - (sum - bill[k]) / 2 === 0) console.log('Bon Appetit');
	else return b - (sum - bill[k]) / 2;
};

console.log(fn([3, 10, 2, 9], 1, 7));
