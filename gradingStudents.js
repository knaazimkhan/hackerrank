const fn = grades => {
	const roundedGrade = grades.map(grade => {
		const r = grade % 5;
		const q = (grade - r) / 5;

    if (grade < 38) {
			return grade;
		} else {
			if (r) {
				const g = q * 5 + 5;
				return g - grade < 3 ? g : grade;
			} else return grade;
		}
	});

  return roundedGrade;
};

const grades = [50, 73, 67, 38, 33];
// const grades = [
// 	57, 97, 56, 81, 38, 30, 1, 9, 23, 69, 24, 44, 69, 12, 61, 50, 84, 3, 17, 91, 39, 26, 18, 66, 76, 31, 42, 52,
// 	21, 55, 57, 18, 3, 97, 85, 78, 45, 94, 39, 90, 93, 60, 73, 93, 32, 8, 57, 19, 52, 4, 97, 32, 85, 39, 75, 27,
// 	54, 0,
// ];

console.log(fn(grades));
