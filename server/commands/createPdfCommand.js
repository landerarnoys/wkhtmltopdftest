'use strict';

var invoicePdfRenderer = require('../../server/services/pdfRenderer');

module.exports = (function() {
    return {
        execute: function(data) {

            return invoicePdfRenderer.render(data, 'consignor')
            // return invoicePdfRenderer.render(savedInvoice.pdfGuid, savedInvoice.invoiceNumber);
        }
    };
})();
