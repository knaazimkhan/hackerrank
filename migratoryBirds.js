const fn = birds => {
	const arr = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
	for (let i = 0; i < birds.length; i++) {
		arr[birds[i]] += 1;
	}
  let max = arr[1];
  for (const a in arr) {
    if(arr[a] > max){
      
    }
	}
	return arr;
};

console.log(fn([1, 2, 1, 3, 2]));
