let arr = [1,2,3,4,5,5,6,7,8,8,9]
console.log(arr);
// convert aaray to set 
let setFromArray = new Set(arr);
console.log(setFromArray);


// convert set to array
let arrayFromSet = Array.from(setFromArray);
console.log(arrayFromSet);
arrayFromSet.push(3);
console.log("Array from set",arrayFromSet); 

let arrFromsetUsingSpreadOperator = [...setFromArray];
arrFromsetUsingSpreadOperator.push(3);
console.log("arrFromsetUsingSpreadOperator",arrFromsetUsingSpreadOperator);
