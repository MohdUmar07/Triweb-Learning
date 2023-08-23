let obj = {name:"Anas",address:"India"}
console.log(obj.__proto__); // [Object: null prototype] {}
let obj1 = Object.create(obj);
obj1.name= "Shiva";
console.log("Obj1.__proto__",obj1.__proto__);
obj1.__proto__.display = function(){
    console.log(`${this.name} lives in ${this.address}`);
}

obj1.display();
console.log("===========================")
let obj2 = Object.create(obj);
obj2.name = "Aban";
console.log("Obj2.__proto__",obj2.__proto__);
obj2.display();