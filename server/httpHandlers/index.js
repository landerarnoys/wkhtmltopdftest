'use strict';
var express = require('express');
var PdfController = require('../../server/httpHandlers/controllers/pdfController');

module.exports = function(app) {
    app.post('/app/pdf', PdfController.renderPdf);
};
