'use strict';

function PdfController() {

    this.renderPdf = function(req, res, next) {
        var data = {};
        res.render('doc1', data)
    }

}

module.exports = new PdfController();
