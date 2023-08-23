let obj = {name:"Anas",Address:"India",Mobile:1234567890,Mail:"abcd1234@gmail.com"}

for(const key in obj){
    console.log(`Value on ${key} is ${obj[key]}`);
}

let getKeys = Object.keys(obj);
console.log(getKeys);