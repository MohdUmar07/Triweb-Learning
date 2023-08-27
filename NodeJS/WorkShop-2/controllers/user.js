const userModel = require('../models/user')

// register
module.exports.register = (req, res) =>{
    userModel.Insert(req.body);
    res.send(req.body);
    
}

// get

module.exports.get = (req, res) =>{
    res.send(req.body);
}


// update

module.exports.update = (req, res) =>{
    res.send(req.body);
}


// delete
module.exports.delete = (req, res) =>{
    res.send(req.body);
}
