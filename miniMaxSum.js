/*
  Given five positive integers, find the minimum and maximum values that can be calculated by 
  summing exactly four of the five integers. Then print the respective minimum and maximum values
  as a single line of two space-separated long integers.

  Example

  The minimum sum is  and the maximum sum is . The function prints

  16 24
*/


arr = [1, 2, 3, 4, 5];

let s = 0,
	min = 0,
	max = 0;

while (s < arr.length) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i !== s) sum += arr[i];
	}

  if(s === 0) min = max = sum;
	if (sum < min) min = sum;
	if (sum > max) max = sum;
	s++;
}
console.log(min, ' ', max);
