import { Request, Response, NextFunction } from "express";

import User from "../models/user";

const registerUser = async (req: Request, res: Response, next: NextFunction) => {

   
    const user = new User(req.body);
    user.save();
    console.log(req.body);
    console.log("Registration done!");

    res.send("Registration done!")
    
    
    


}
export { registerUser };