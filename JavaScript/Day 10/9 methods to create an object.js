let objInit = {name:"Anas",Address:"India"}
console.log(objInit);


function employee(name,designation,salary,age,){

    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.age = age;
}
let objFn = new employee("Anas","Fresher Intern",0);
let objFn1 = new employee("Aban","Fresher Intern",0);
console.log(objFn);

console.log(objFn1);


//----
let obj1 = {name:"Anas",address:"India"}
console.log("obj1 ",obj1)
obj2=obj1;
obj2.name= "Aban";
obj2.address ="Gonda"; 

console.log("obj1 ",obj1);
console.log("obj2 ",obj2);
console.log("=========================================================")

let objA =  {name:"Anas",
        address:"India",
        display:function(){
            console.log(`${this.name} lives in ${this.address}`);
        }
    }
objA.display();    
let objB =  Object.create(objA);
objB.name = "Shiva";
objB.address = "Uttar Pradesh"
console.log(objA);
console.log(objB);
objB.display();