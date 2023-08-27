
const db = require("../util/database");

module.exports.Insert = (userData)=>{
    // console.log(userData.name);
    

let query = "INSERT INTO `user`(`name`,`email`,`password`,`remark`) VALUES (?,?,?,?)" 
db.execute(query,[userData.name,userData.email,userData.password,userData.remark])
// execute



// result return
return true;

//...
}
