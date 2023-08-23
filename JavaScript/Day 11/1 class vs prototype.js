function Employee(mobile){
    this.department = "None";
    this.mobile ='' ;
}

function Maneger(name){
    Employee.call(this)
    this.name = name;


}

Maneger.prototype = Object.create(Employee.prototype);
Maneger.prototype.constructor = Maneger

let aban = new Maneger("Aban");
console.log(aban);

aban.mail = "absd@12345.com";

console.log(aban);
console.log(aban.__proto__);