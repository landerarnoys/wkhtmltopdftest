//wkhtmltopdftest
var express = require('express');
var app = express();
const wkhtmltopdf = require('node-wkhtmltopdf');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 8080;

app.get('/pdfdownload', function (req, res) {

    const options = [
        '--margin-bottom 18',
        '--margin-left 10',
        '--margin-right 10',
        '--margin-top 20',
        '--custom-header authorization bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoidXNlcjFAY3VzdG9tczR0cmFkZS5jb20iLCJlbWFpbCI6InVzZXIxQGN1c3RvbXM0dHJhZGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2FzLWRldi5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NTQ5MmUxMTQ4ZGU3MDQ5ODc3ZDE1ZmQxIiwiYXVkIjoid0FNUHRVMkhWMEhtWFk5Y0ZWU0xsSzZ2Q2tIYkU5a2kiLCJleHAiOjE0NzM4ODgxNDUsImlhdCI6MTQ3Mzg1MjE0NX0.LjXu330GsQQVO7Yv8xvZ3F9S2r48STCJjrZcFDK9oyk'
    ];

    var url = 'https://cas-dev.azurewebsites.net/#/dashboard';

    const doc = wkhtmltopdf(options, url);

    doc.stdout.pipe(res);

    return res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename="test.pdf"',
    });

});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//start the server
app.listen(port, function () {
    console.log('Express server started on port 8080');
});
