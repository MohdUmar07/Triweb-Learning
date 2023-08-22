let arr1 = ['a','b','c','d']; 
let arr2 = ['1','2','3','4']; 
console.log("concat");
let arr3 = arr1.concat(arr2);
console.log(arr3);


console.log("----------join--------------");
let str = arr1.join(' ');
console.log(str);

console.log("----------push--------------");

let l = arr1.push('e');
console.log("return from push", l);
console.log("return after push", arr1);

console.log("----------pop--------------");

let l1 = arr1.pop('e');
console.log("return from pop", l1);
console.log("return after pop", arr1);

console.log("----------shif--------------");

let l2 = arr1.shift();
console.log("return from shift", l2);
console.log("return after shift", arr1);

console.log("----------unshift--------------");

let l3 = arr1.unshift('a');
console.log("return from unshift", l3);
console.log("return after unshift", arr1);