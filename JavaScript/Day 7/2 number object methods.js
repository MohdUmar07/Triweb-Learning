let x = 2/'a';
console.log(x);

if(!Number.isNaN(x)){
    console.log("x is a number");

} else {
    console.log("x is NaN")
}



let safeNum = -9007199254740991;
console.log("Is safe",Number.isSafeInteger(safeNum));

let strN1 = '1';
let strN2 = '1.1';

console.log(parseInt(strN1),"---",parseFloat(strN2));