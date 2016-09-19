'use strict';

//wkhtmltopdftest
var express = require('express');
var app = express();
const wkhtmltopdf = require('node-wkhtmltopdf');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 8080;
var createPdfCommand = require('../server/commands/createPdfCommand');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')

// setup handlebars view engine
app.set('views', path.resolve(__dirname + '/views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',                        // .hbs extensions
}));
app.set('view engine', '.hbs');

// use standard body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure httpHandlers (server side rendered views via handlebars)
require('../server/httpHandlers')(app);

//get the pdf route
app.get('/pdfdownload', function (req, res) {

    var data = {
    };

    var doc = createPdfCommand.execute(data);

    doc.stdout.pipe(res);

    return res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'inline; filename="test.pdf"',
    });

});

app.get('/', function(req, res) {
    res.send('Surf to /pdfdownload to test')
});

//start the server
app.listen(port, function () {
    console.log('Express server started on port 8080');
});
