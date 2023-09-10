import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs'
import User from "../models/user";
import jwt from 'jsonwebtoken';



interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
}

const registerUser = async (req: Request, res: Response, next: NextFunction) => {



    let resp: ReturnResponse;
    try {

        // --> how to decode base64 <-- //
        // const name = req.body.name;
        // const email = req.body.email;
        // const passwordFromReq = req.body.password;

        // let data = 'stackbash.com';
        // let buff = Buffer.from(passwordFromReq);
        // let password = buff.toString('base64');
        // const user = new User({name,email,password});

        const name = req.body.name;
        const email = req.body.email;
        let password = await bcrypt.hash(req.body.password, 12);


        const user = new User({ name, email, password });
        const result = await user.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} }
            res.send(resp);
        } else {
            resp = { status: "success", message: "Registration done!", data: { userId: result._id } };
            res.send(resp)
        }
    } catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
        // console.log(error);
    }
};

const loginUser = async (req: Request, res: Response,) => {

    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        // find user with email -- 
        const user = await User.findOne({ email });
        if (!user) {
            resp = { status: "error", message: "User not found", data: {} };
            res.send(resp);
        } else {

            // verfy password using bcrypt
            const status = await bcrypt.compare(password, user.password);

            // than decide0
            if (status) {

                const  token = jwt.sign({userId:user._id},  "thisismyveryveryimportantsecretkey",{expiresIn: "1h"});

                resp = { status: "success", message: "Logged in", data: {token} };
                res.send(resp);
            } else {
                resp = { status: "error", message: "User and password is incorrect", data: {} };
                res.send(resp);
            }

        }

    } catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
        console.log(error);
    }

}


const getUser = async (req: Request, res: Response) => {
    // console.log("body", req.body);
    // console.log("query",req.query);
    // console.log("params", req.params.userId);
    // res.send("Done!")
    // console.log("Changes are changed");


    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId, { name: 1, email: 1 });
        if (!user) {
            resp = { status: "error", message: " No user found ", data: {} };
            res.send(resp);
        } else {
            resp = { status: "success", message: "User found ", data: user };
            res.send(resp)
        }
    } catch (error) {

        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
        console.log(error);

    }

}

const updateUser = async (req: Request, res: Response,) => {


    let resp: ReturnResponse;
    // try {
    //     const userId = req.body._id;
    //     const user = await User.findById(userId);
    //     user.name = req.body.name;
    //     await user.save();
    //     resp = { status: "success", message: "User updated ", data: {} };
    //     res.send(resp);
    // } catch (error) {
    //     console.log(error);


    // }

    try {

        const userId = req.body._id;
        const user = await User.findById(userId);

        if (!user) {
            resp = { status: "error", message: " No user found ", data: {} };
            res.send(resp);

        } else {
            user.name = req.body.name;
            await user.save();

            resp = { status: "success", message: "User updated", data: {} };
            res.send(resp);
        }

    } catch (error) {
        resp = { status: "error", message: "Something went wrong", data: {} };
        res.status(420).send(resp);
    }


};




export { registerUser, getUser, updateUser, loginUser };