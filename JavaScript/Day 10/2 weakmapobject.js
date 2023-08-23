let name1 = {name:"hi"}
m ={[name1]:"Anas"}

name1 = "My Name";

let name2 = {name:"hi"}
m ={[name2]:"Anas"}
console.log(m[name2]);

console.log(m);

let wMap = new WeakMap();
obj1 = {};
obj2 = {1:1};
obj3 = {2:2};
wMap.set(obj1,"Val1");
wMap.set(obj2,"Val2");
wMap.set(obj3,"Val3");

// console.log(wMap);

let v1 = wMap.get(obj1);
console.log(v1);