let a = [10,20,30,40];

let total = a.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},0)
console.log(total); // return 100