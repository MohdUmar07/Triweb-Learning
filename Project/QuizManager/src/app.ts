import express from 'express';
import  mongoose  from 'mongoose';

import userRoutes from './routes/user';
import authRoutes from './routes/auth';


const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

declare global {
    namespace Express{
        interface Request{
            userId:String;
        }
    }
}

// app.get('/',(req,res)=>{
//     res.send("Hi Hello");
   
// })

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

async function startServer() {
    

try{
    await mongoose.connect(connectionString);
    app.listen(process.env.PORT, ()=>{
        console.log("Server connect with Database ");
        
    });

    } catch (error) {
    console.log(error);
    
    }

}


startServer()
