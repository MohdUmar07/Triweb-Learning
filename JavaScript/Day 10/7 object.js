let obj = {name:"Anas",Address:"India",Mobile:1234567890}

console.log(obj);
console.log(obj.mail); // umdefined
obj.alternateMobile = null;
console.log(obj.alternateMobile);
console.log("-----------------------------------");
let obj1 = new Object();

obj1.name = "Aban";
obj1.Address = "India"
obj1.Mobile = 12100121
console.log(obj1);

// .(dot) notation---

console.log("dot notation",obj.name);

// Breaket notation
console.log("breaket notation",obj['Mobile']);


const v = "123";
obj[v] = "hi"
console.log(obj);
console.log("X ",obj[v]);