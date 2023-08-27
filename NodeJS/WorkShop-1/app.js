const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Hello everyone");
});

app.post('/add', (req,res)=>{
    let n1 = 3;
    let n2 = 4;
    let sum = n1+n2;
       
    // res.send("Sum = " + sum);
    res.send(`Sum = ${sum}`);
});

app.listen(3000);