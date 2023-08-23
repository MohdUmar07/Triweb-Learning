function Student(name, age){
    this.name = name;
    this.age = age;
}

let student1 = new Student("Aban", 18);
console.log(student1);



let student2 = new Student("Shiva",19); 




console.log("--------------------------------------");


Student.prototype.display = function(){
    console.log(`Hi ${this.name}`);

}
student1.display();
student2.display();