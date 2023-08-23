function validateUser(name){
    return new Promise((resolve, reject)=>{
        if (name == "abcd"){
            resolve("Valid user");
        } else {
            reject("Invalid user");
        }
    })
}

validateUser('Aban')

    .then((status)=>{
        console.log("Event Loop after raound 1");
        console.log(status);
    })
    .catch((err)=>{
        console.log(err);
    })

    console.log("Event Loop raound 1")