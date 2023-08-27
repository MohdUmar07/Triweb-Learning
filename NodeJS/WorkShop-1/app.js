const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("I am response");
});

app.get('/add', (req,res)=>{
    let n1 = 3;
    let n2 = 4;
    let sum = n1+n2;
       
    // res.send("Sum = " + sum);
    res.send(`Sum = ${sum}`);
});



app.post('/add',(req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1+n2;
    res.send(`sum = ${sum}`);
});


app.post('/diffrence',(req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let diff = n1-n2;
    res.send(`diffrence = ${diff}`);
});


app.post('/multiply',(req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let multiply = n1*n2;
    res.send(`Product = ${multiply}`);
});


app.post('/division',(req, res)=>{

    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let quotient = n1/n2;
    res.send(`Quotient = ${quotient}`);
});


app.listen(3000);

