console.log(Math.PI);


let min = Math.min(2,5,6,8,4)
let max = Math.max(2,5,6,8,4);
console.log("min",min,"max ",max);
console.log(min+max);


let ran = Math.random();
console.log("random number = ",ran);

//for one, two ....... digit 

let ran1 = Math.round(Math.random()*10);// it return some time "10" which is the 2 digit number 
console.log("random number = ",ran1);


let ran1_1 = Math.floor(Math.random()*10);// it never return the 2 digit number 
console.log("random number = ",ran1_1);


let ran2 = Math.round(Math.random()*100);
console.log("random number = ",ran2);



// Methods of number---
let num1 = 345685246;
let num2 = num1.toExponential();
console.log(num1,"=",num2);

let num3 = Number(1.345675825).toFixed(2);
console.log(num3)