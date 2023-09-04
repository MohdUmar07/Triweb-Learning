import {Request, Response} from 'express';

import {addUserToDB} from '../models/user';

const registerUser = (req:Request, res:Response)=>{
    // fetch data from req
    // validation 
    // normalize

    const userName = "Anas";
    const password = "Password";

    const result = addUserToDB(userName, password)

    res.send(result);
    // task and code
}

export {registerUser};