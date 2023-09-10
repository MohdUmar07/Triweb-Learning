import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    // throw new Error("I am working here ");
    // return Promise.reject("I am working here");

  
// header -> token 

    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const err = new Error("Not authenticated ");
        throw err;
        // res.status(504).send("Not authenticated")
    }
    const token = authHeader.split(' ')[1];

// jwt -> decode using sign "thisismyveryveryimportantsecretkey"
    let decodedToken:{userId:String, iat:Number, exp:Number};

    try {
        decodedToken = <any>jwt.verify(token, "thisismyveryveryimportantsecretkey");
        // console.log(decodedToken);
        
    } catch (error) {
        // console.log(error);
        const err = new Error("Not authenticated ");
        throw err;
        // res.status(504).send("Not authenticated")
    }

    if(!decodedToken){
        const err = new Error("Not authenticated ");
        throw err;
        
    }

// userId
    req.userId = decodedToken.userId;   
    next();  
}

export { isAuthenticated };