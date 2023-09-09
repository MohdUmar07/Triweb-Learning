import express from 'express';


import userRoutes from './routes/user';
import  mongoose  from 'mongoose';


const app = express();
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Hi Hello");
   
// })

app.use('/user', userRoutes)

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
