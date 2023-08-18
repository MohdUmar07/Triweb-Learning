function addNumbers(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum = sum + element;
        
    }
    console.log(sum);

}
addNumbers(2,8,5,6,7);
addNumbers(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
addNumbers(12,15,17,19,21,23,25);