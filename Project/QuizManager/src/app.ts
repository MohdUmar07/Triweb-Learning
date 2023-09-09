import express from 'express';


import userRoutes from './routes/user';
import  mongoose  from 'mongoose';


const app = express();
const connectionString = "mongodb+srv://myuser:abcd1234@mycluster.jkyhiwt.mongodb.net/workshopDb?retryWrites=true&w=majority"

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Hi Hello");
   
// })

app.use('/user', userRoutes)

async function startServer() {
    

try{
    await mongoose.connect(connectionString);
    app.listen(3002, ()=>{
        console.log("Server connect with Database ");
        
    });

    } catch (error) {
    console.log(error);
    
    }

}


startServer()
