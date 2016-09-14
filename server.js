//wkhtmltopdftest
var express = require('express');
var app = express();
const wkhtmltopdf = require('node-wkhtmltopdf');
var fs = require('fs');

app.get('/pdfdownload', function (req, res) {

    const options = [
        '--margin-bottom 18',
        '--margin-left 10',
        '--margin-right 10',
        '--margin-top 20',
        '--custom-header Accept-Language fr-CA',
    ];

    var url = 'https://www.tweakers.net';

    const doc = wkhtmltopdf(options, url);

    doc.stdout.pipe(res);

    return res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename="test.pdf"',
    });



});

//start the server
app.listen(1234, function () {
    console.log('Express server started on port 1234');
});
