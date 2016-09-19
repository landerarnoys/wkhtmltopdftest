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
        "id": "string",
        "creationDate": "string",
        "lastModification": "string",
        "clientId": "string",
        "attachmentIds": [
            "string"
        ],
        "additionalDocuments": [
            {
                "validationOffice": {
                    "warnings": {
                        "blocking": [
                            "string"
                        ],
                        "nonBlocking": [
                            "string"
                        ]
                    },
                    "producedDocumentValidationOffice": "string"
                },
                "writeOff": {
                    "warnings": {
                        "blocking": [
                            "string"
                        ],
                        "nonBlocking": [
                            "string"
                        ]
                    },
                    "unit": "string",
                    "amount": 0
                },
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "archiveLocationIndicator": "string",
                "category": "string",
                "archiveRelatedLocationContent": "string",
                "archiveSupport": "string",
                "issueDate": "string",
                "effectiveDate": "string",
                "submitter": "string",
                "complementaryInformation": "string",
                "name": "string",
                "quantity": 0,
                "quantityCode": "string",
                "refNum": "string",
                "type": "string"
            }
        ],
        "additionalInformations": [
            {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "code": "string",
                "text": "string",
                "type": "string"
            }
        ],
        "agentId": "string",
        "authentication": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "auth": "string"
        },
        "carrierId": "string",
        "currencyExchange": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "currency": "string"
        },
        "customsCharges": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "currency": "string"
        },
        "customsReturnedData": {
            "currencyExchange": {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "currency": "string"
            },
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            }
        },
        "declarantId": "string",
        "declarationOfficeId": "string",
        "dutyTaxFees": [
            {
                "payment": {
                    "warnings": {
                        "blocking": [
                            "string"
                        ],
                        "nonBlocking": [
                            "string"
                        ]
                    },
                    "deferredPayment": "string",
                    "deferredPaymentHolder": "string",
                    "methodCode": "string",
                    "refNum": "string"
                },
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "preference1": "string",
                "preference2": "string",
                "quotaId": "string",
                "dutyRegime": "string",
                "type": "string",
                "unitType": "string",
                "unitQual": "string",
                "category": "string"
            }
        ],
        "goodsMeasure": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "calcCode": "string",
            "uoM": "string",
            "supQtyUoM": "string"
        },
        "goodsShipmentIds": [
            "string"
        ],
        "governmentProcedure": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "proc": "string",
            "declProcType": "string",
            "prevProc": "string",
            "procEU": "string",
            "procNat1": "string",
            "procNat2": "string"
        },
        "importerId": "string",
        "loadingLocation": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "place": "string",
            "placeCode": "string",
            "country": "string"
        },
        "obligationGuarantee": {
            "declarationOfficeId": "string",
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "securityDetails": "string",
            "declarationOfficeRole": "string",
            "reference": "string"
        },
        "packaging": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "quantity": 0,
            "type": "string",
            "shippingMarks": "string"
        },
        "previousDocument": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "art": "string",
            "billOfLoading": "string",
            "category": "string",
            "date": "string",
            "item": "string",
            "lineNumber": 0,
            "loc": "string",
            "name": "string",
            "number": "string",
            "type": "string"
        },
        "submitter": {
            "address": {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "box": "string",
                "city": "string",
                "country": "string",
                "number": "string",
                "zipCode": "string",
                "street": "string",
                "streetNumBox": "string",
                "region": "string",
                "type": "string"
            },
            "communication": {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "number": "string"
            },
            "contactPerson": {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "email": "string",
                "fax": "string",
                "name": "string",
                "tel": "string"
            },
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "code": "string",
            "name": "string",
            "role": "string"
        },
        "ucr": {
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            },
            "traderReference": "string",
            "version": "string",
            "sequenceNumber": 0
        },
        "vatCharges": {
            "currencyExchange": {
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "currency": "string"
            },
            "warnings": {
                "blocking": [
                    "string"
                ],
                "nonBlocking": [
                    "string"
                ]
            }
        },
        "businessPartners": [
            {
                "businessPartnerId": "string",
                "warnings": {
                    "blocking": [
                        "string"
                    ],
                    "nonBlocking": [
                        "string"
                    ]
                },
                "type": "string"
            }
        ],
        "warnings": {
            "blocking": [
                "string"
            ],
            "nonBlocking": [
                "string"
            ]
        },
        "warningCount": {
            "blocking": 0,
            "nonBlocking": 0,
            "totalBlocking": 0,
            "totalNonBlocking": 0
        },
        "accDateCode": "string",
        "validityDuration": "string",
        "addDeclType1": "string",
        "addDeclType2": "string",
        "comRefNum": "string",
        "declType": "string",
        "docRefNum": "string",
        "functionRefNum": "string",
        "importExportTransit": "string",
        "invoiceCurrency": "string",
        "issueDate": "string",
        "issuePlaceCode": "string",
        "loadListNum": 0,
        "msgFunctionCode": "string",
        "nameCode": "string",
        "sendDateTime": "string",
        "totNumItems": 0,
        "trxNatCode1": "string",
        "trxNatCode2": "string",
        "version": "string",
        "extra": {},
        "agentRole": "string",
        "declarantRole": "string",
        "importerRole": "string",
        "declarationOfficeRole": "string",
        "emergencyCode": "string",
        "emergencyCodeBool": true
    };

    // const options = [
    //     '--margin-bottom 18',
    //     '--margin-left 10',
    //     '--margin-right 10',
    //     '--margin-top 20',
    // ];
    //
    // var url = 'https://cas-dev.azurewebsites.net/#/dashboard';
    //
    // const doc = wkhtmltopdf(options, url);
    //
    // doc.stdout.pipe(res);
    //
    // return res.writeHead(200, {
    //     'Content-Type': 'application/pdf',
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Disposition': 'attachment; filename="test.pdf"',
    // });

    var doc = createPdfCommand.execute(data);

    doc.stdout.pipe(res);

    return res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename="test.pdf"',
    });

});

app.get('/', function(req, res) {
    res.send('Surf to /pdfdownload to test')
});

//start the server
app.listen(port, function () {
    console.log('Express server started on port 8080');
});
