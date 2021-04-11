const express = require('express');
const app = express();

var port = 3000;

// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello there, ' + (req.params.name))
// });

app.listen(port, () => {
    console.log('app is running on port: ', port);
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
    //divide the tip percentage by 100 and store that in a variable called tipPercentage
    let tipPercentage = Number(req.params.tipPercentage) / 100
    //multiply the tipPercentage by the total to get the tip amount, store in a variable
    //called tip
    let tip = Number(req.params.total) * tipPercentage
    //respond with the grand total, which is the total plus the tip
    res.send("Your grand total is " + (tip + Number(req.params.total)))
})