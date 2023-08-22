// slice

let arr = [1,2,3,4,5,6,7,8,9];

let arr1 = arr.slice(1,4);
console.log(arr1);// [ 2, 3, 5 ]
console.log("after slice",arr);

// splice

let arr2 = arr.splice(1,4);
console.log(arr2);//[ 2, 3, 5, 4 ]
console.log("After splice",arr);