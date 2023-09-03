// break and continue statement with function ---- 


console.log("break statement ");
let a = function(){let n = 10;

for(let i = 1; i <= n; i++){
    console.log(i)

    if (i == 6){
        break;
    }
}}

a();


console.log("-------------------------------------------------");

console.log("continue statement ");
let b = function(){let n = 10;

for(let i = 1; i <= n; i++){
    

    if (i == 6){
        continue;
    }
    console.log(i)
}}

b();