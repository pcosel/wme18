// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;
var world_data;

//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!


/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/
const csvFilePath='world_data.csv';

const csv =  require("csvtojson");
csv()
    .fromFile(csvFilePath)
    .on("end_parsed", function(jsonArrayObj){
        world_data = jsonArrayObj;
    });


/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/

app.get('/items',function (req, res){
    res.send(world_data);
    }
);

app.get('/items/:id', function(req, res) {
    const id = req.params.id;

    if(id <= 0 || id > world_data.length) {
        res.status(500).send("");
    } else {
        res.send(world_data[id - 1]);
    }
});

app.get('/items/:id1/:id2', function(req, res) {
    const id1 = req.params.id1;
    const id2 = req.params.id2;

    if(id1 <= 0 || id2 <= 0 || id1 > id2 || id2 > world_data.length) {
        res.status(500).send("");
    } else {
        var result = [];
        var j = 0;
        for (var i = id1 - 1; i <= id2 - 1; i++) {
            result[j] = world_data[i];
            j++;
        }

        res.send(result);
    }
});

app.post('/items', function (req, res) {
    var name = req.params.name;
    var birthRate = req.params.birthRate;
    var cellphone = req.params.cellphone;

    console.log(name);

    var newData = {"name": name,"birth rate per capita": birthRate, "cell phones per 100": cellphone};
    world_data.push(newData);

    res.send(world_data);
});

// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});