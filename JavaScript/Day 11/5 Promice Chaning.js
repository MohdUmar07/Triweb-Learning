function returnUser(){
    return new Promise((resolve, reject)=>{
        resolve({name:"Anas"})
    });
}
returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userData)=>{
        console.log("hi",userData);
    })
    .catch((err)=>{
        console.log(err);
    })