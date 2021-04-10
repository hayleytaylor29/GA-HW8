const express = require('express');
const app = express();

var port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send('Hello there, ' + (req.params.name))
});

app.listen(port, () => {
    console.log('app is running on port: ', port);
})