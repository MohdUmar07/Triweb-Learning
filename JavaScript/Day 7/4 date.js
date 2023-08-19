let date = "2023 08 19 12:56:50"
console.log(date);

let dateObj = new Date(date);

console.log("month", dateObj.getMonth());
console.log("year", dateObj.getFullYear());
console.log("date", dateObj.getDate());
console.log("time", dateObj.getTime());
console.log("hours", dateObj.getHours());
console.log("minutes", dateObj.getMinutes());
console.log("seconds", dateObj.getSeconds());