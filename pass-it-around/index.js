var express = require('express');
var app = express();

var port = 3000;

app.listen(port, () => {
    // console.log('app is running on port: ', port);
});


app.get('/:numberOfBottles', (req, res) => {
    let numberOfBottles = Number(req.params.numberOfBottles);
    let text = " bottles of wine on the wall";
    let text1 = " bottle of wine on the wall";
    let text2 = "No bottles of wine left!";
    let link = "" + (numberOfBottles -1);
    // console.log(link)
    if(numberOfBottles >= 2){
        res.send(numberOfBottles +text+ '<br>'+
        '<a href=" '+link+' ">Take one down pass it around</a>'); 
    }
    else if(numberOfBottles == 1){
        text = text1;
        res.send(numberOfBottles +text+ '<br>'+
        '<a href=" '+link+' ">Take one down pass it around</a>'); 
    }
    else if(numberOfBottles == 0) {
        text = text2;
        let reset = "" + (numberOfBottles + 99)
        res.send(text +'<br>'+ '<a href=" '+reset+' ">Start Again!</a>');
    }
})
