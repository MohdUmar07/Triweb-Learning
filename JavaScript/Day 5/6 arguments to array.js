function addNumbers(){
    let sum = 0;

    // TypeError: arguments.forEach is not a function
    // arguments.forEach(element => {
    //     sum = sum + element;
    //     console.log(sum);
    // });


    let arr = Array.from(arguments);
    arr.forEach(element =>{ 
        sum = sum + element;
});
console.log(sum);

}
addNumbers(2,8,5,6,7);
addNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
addNumbers(12,15,17,19,21,23,25);