function multipleArguments(multiplier,...arg){
    arg.forEach((elem)=>{
        console.log(multiplier*elem);
        
       
    });
    
}
    console.log("________________________________");
    multipleArguments(2,1);
    console.log("________________________________");
    multipleArguments(2,1,3,5,8);
    console.log("________________________________");
    multipleArguments(2,1,3,5,8,10,15);
    console.log("________________________________");
    
    

