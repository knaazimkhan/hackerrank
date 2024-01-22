/*
  Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
  - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

  Example

  s = 07:05:45PM
  Return 19:05:45
*/

const s = '12:45:54PM';

if (s.includes('PM')) {
	let [hh, ...rest] = s.split(':');
	hh = (+hh === 12 ? '12' : +hh + 12) + ':' + rest.join(':').replace('PM', '');
	console.log(hh);
} else {
	let [hh, ...rest] = s.split(':');
	hh = (+hh === 12 ? '00' : hh) + ':' + rest.join(':').replace('AM', '');
	console.log(hh);
}
