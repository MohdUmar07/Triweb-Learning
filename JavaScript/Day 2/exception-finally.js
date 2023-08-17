function validateUser(Name, password){
    try{
        /*
        .
        .
        .
        .
        */
       if (Name.length == 5){
            throw new Error("User name is too short");
       } 
       if (password.length < 8);{
        throw new Error("Password must have 8 charecter")
        }
        console.log("Working");
    /*
    .
    .
    .
    .
    */
    return"In try";
    }
    catch(error){
    //consol.log(error)
    return "Fall in catch";
    }finally{
        console.log("inside finally block");
        return "from finally";// overrides the previous return 
    }
}

let Name = "anas";
let password = '12454'
let msg = validateUser(Name, password)
console.log("user", msg)