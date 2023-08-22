console.log("---------every------------");

let arr = [1,3,5,7,9];
let arrEvery = arr.every((element)=>element%2!==0);
console.log(arrEvery);// true

let arr1 = [1,2,5,7,9];
let arrEvery1 = arr1.every((element)=>element%2!==0);
console.log(arrEvery1);// false

console.log("---------some------------");

let arr2 = [1,3,4,5,7];
let arrsome = arr2.some((element)=>element%2!==0);
console.log(arrsome);// true

let arr3 = [1,3,5,7,9];
let arrsome1 = arr3.some((element)=>element%2==0);
console.log(arrsome1);// false