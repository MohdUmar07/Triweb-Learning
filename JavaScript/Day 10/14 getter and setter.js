let obj = {
    age:30,

    get a(){
        return this.age;
    },
    set b(newAge){
        this.age=newAge
    }
}

console.log(obj.a);
obj.b = 40;
console.log(obj.a);