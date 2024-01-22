/*
  You are in charge of the cake for a child's birthday. You have decided the cake will have one candle 
  for each year of their total age. They will only be able to blow out the tallest of the candles.
  Count how many candles are tallest.

  Example

  candles = [4,4,1,3]
  
  The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

const candles = [5,4, 4, 1, 3];

let max = candles[0],
	count = 0;

for (let i = 1; i < candles.length; i++) {
	if (candles[i] > max) max = candles[i];
}
for (let i = 0; i < candles.length; i++) {
	if (candles[i] === max) count++;
}
console.log(count);
