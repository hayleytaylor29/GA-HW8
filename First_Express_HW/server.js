const { response } = require('express');
const express = require('express');
const app = express();

var port = 3000;

// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello there, ' + (req.params.name))
// });

app.listen(port, () => {
    console.log('app is running on port: ', port);
})

// app.get('/tip/:total/:tipPercentage', (req,res) => {
//     //divide the tip percentage by 100 and store that in a variable called tipPercentage
//     let tipPercentage = Number(req.params.tipPercentage) / 100
//     //multiply the tipPercentage by the total to get the tip amount, store in a variable
//     //called tip
//     let tip = Number(req.params.total) * tipPercentage
//     //respond with the grand total, which is the total plus the tip
//     res.send("Your grand total is " + (tip + Number(req.params.total)))
// })
let responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
]
app.get('/magic/:question', (req,res) => {
    let answer = Math.floor(Math.random()*responses.length);
    console.log(responses[answer]);
    const ask = req.params.question;
    const ans = responses[answer];
    res.type('text/html');
    res.send(ask + '<h1>' +ans+ '</h1>');
})