function square(num){
    console.log("Square of outer function ",num*num);
    
    
    function getSquare(num1){
        console.log("Square of Inner function ",num1*num1);
    }

        
    getSquare(num)

}
square(7);