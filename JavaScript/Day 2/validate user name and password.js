function validateUser(name, password){
    if(name == ""){
        console.log("Invalid username")
        return 0;
    } else if(password == "" || password.length < 8){
        console.log("Invalid Password")
        return;
    }

    console.log("Yes successfully validate");

}

let username = "Anas";
let userpassword = "65451324";
validateUser(username, userpassword);

