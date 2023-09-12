import express from 'express';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express"

import userRoutes from './routes/user';
import authRoutes from './routes/auth';
import ProjectError from './helper/error';


const app = express();

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | [];
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}

// app.get('/',(req,res)=>{
//     res.send("Hi Hello");

// })

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message: String;
    let statusCode: number;
    

    if (err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    } else {
        message = "Something went wrong. Please try again later.";
        statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} };

    if (err.data) {
        resp.data = err.data;
    }

    console.error(err.statusCode, err.message); // Log the error

    res.status(statusCode).send(resp);
});


async function startServer() {


    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT, () => {
            console.log("Server connect with Database ");

        });

    } catch (error) {
        console.log(error);

    }

}


startServer()