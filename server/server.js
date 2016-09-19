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
        "id": "ce835465c3f2434bbd6ee88f84cf0811",
        "creationDate": "2016-09-16T10:50:30.794793Z",
        "lastModification": "2016-09-16T10:50:34.6202008Z",
        "clientId": "82e17a5125194d39b94adac80c13788d",
        "attachments": [
            {
                "id": "1ecf639cdf1e461dbf5ec1737083f660",
                "creationDate": "2016-09-16T10:50:34.5591578Z",
                "lastModification": "2016-09-16T10:50:34.5591578Z",
                "clientId": "82e17a5125194d39b94adac80c13788d",
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "warningCount": null,
                "contentType": "",
                "insertedBy": null,
                "insertion": "2016-09-16T10:50:34.4851056Z",
                "location": "https://casstoredev.blob.core.windows.net/declarationattachment-82e17a5125194d39b94adac80c13788d/c3f3b66b-e8a8-4878-9501-0da0c25f4c64?sv=2015-02-21&sr=b&sig=DGygoO87IN4fP0%2FdaFyI%2BOtJYTHFIgwdvi29G2Bahm4%3D&se=2016-09-16T10%3A55%3A34Z&sp=r",
                "originalName": "Sent Customs FlatFile for 6GB422443385000-PNLOCAL7TXLY2PH.txt",
                "storedName": "c3f3b66b-e8a8-4878-9501-0da0c25f4c64",
                "type": "DeclarationAttachment"
            }
        ],
        "attachmentIds": [
            "1ecf639cdf1e461dbf5ec1737083f660"
        ],
        "additionalDocuments": [],
        "additionalInformations": [
            {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "code": "STC99",
                "text": null,
                "type": null
            }
        ],
        "agent": null,
        "agentId": null,
        "authentication": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "auth": null
        },
        "carrier": null,
        "carrierId": null,
        "currencyExchange": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "currency": "GBP",
            "rate": null
        },
        "customsCharges": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "charges": null,
            "currency": "GBP",
            "exchangeRate": null
        },
        "customsReturnedData": {
            "currencyExchange": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "currency": null,
                "rate": null
            },
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "invoiceTotal": null
        },
        "declarant": null,
        "declarantId": null,
        "declarationOffice": {
            "id": "dbc275cc3c154db3aa4a1a8ca2c4be12",
            "creationDate": "2016-05-12T15:38:34.581373Z",
            "lastModification": "2016-08-18T09:27:47.5194109Z",
            "clientId": "82e17a5125194d39b94adac80c13788d",
            "address": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "box": null,
                "city": "Reading",
                "country": "GB",
                "number": null,
                "zipCode": "RG1 4TE",
                "street": "Sapphire Plaza, Watlington St",
                "streetNumBox": null,
                "region": null,
                "type": null
            },
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "warningCount": null,
            "types": [
                "DEC"
            ],
            "code": "HMRC",
            "name": "HMRC"
        },
        "declarationOfficeId": "dbc275cc3c154db3aa4a1a8ca2c4be12",
        "dutyTaxFees": [],
        "goodsMeasure": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "calcCode": null,
            "calcUnits": null,
            "gmass": null,
            "nmass": null,
            "qty": null,
            "uoM": null,
            "supQty": null,
            "supQtyUoM": null
        },
        "goodsShipments": [
            {
                "id": "2a6d5be8b4fa4a8abc1671b94d058ed5",
                "creationDate": "2016-09-16T10:50:30.5896478Z",
                "lastModification": "2016-09-16T10:50:33.7776065Z",
                "clientId": "82e17a5125194d39b94adac80c13788d",
                "additionalDocuments": [],
                "buyer": null,
                "buyerId": null,
                "consignee": {
                    "id": "eec5046dfbf949bba8c54747a27b3164",
                    "creationDate": "2016-08-08T07:21:36.2484685Z",
                    "lastModification": "2016-08-08T07:21:36.2484685Z",
                    "clientId": "82e17a5125194d39b94adac80c13788d",
                    "address": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "box": null,
                        "city": "Los Angeles",
                        "country": "US",
                        "number": null,
                        "zipCode": "90001",
                        "street": "Watlington Street",
                        "streetNumBox": null,
                        "region": null,
                        "type": null
                    },
                    "contactPerson": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "email": null,
                        "fax": null,
                        "name": null,
                        "tel": null
                    },
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "warningCount": null,
                    "types": [
                        "CSE"
                    ],
                    "code": "USBRANCH",
                    "name": "UC BRANCH CALIFORNIA",
                    "statusCode": null,
                    "authId": null
                },
                "consigneeId": "eec5046dfbf949bba8c54747a27b3164",
                "consignment": {
                    "arrivalTransportMeans": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "identification": null,
                        "identificationType": null,
                        "mode": null
                    },
                    "borderTransportMeans": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "conveyanceRefNum": null,
                        "fpaCode": null,
                        "fpaDateTime": "0001-01-01T00:00:00Z",
                        "identification": null,
                        "identificationType": null,
                        "mode": "1",
                        "country": null
                    },
                    "carrier": null,
                    "carrierId": null,
                    "departureTransportMeans": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "identification": null,
                        "identificationType": null,
                        "mode": "3",
                        "country": null
                    },
                    "goodsLocation": {
                        "address": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "box": null,
                            "city": null,
                            "country": null,
                            "number": null,
                            "zipCode": null,
                            "street": null,
                            "streetNumBox": null,
                            "region": null,
                            "type": null
                        },
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "type": null,
                        "name": null,
                        "identification": "STN"
                    },
                    "itinerary": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "seqNum": null,
                        "country": null
                    },
                    "transportContractDocuments": [],
                    "transportEquipments": [],
                    "unloadingLocation": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "dateArrival": "0001-01-01T00:00:00Z",
                        "placeCode": null,
                        "country": null
                    },
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "seqNum": null
                },
                "consignor": {
                    "id": "a3b85f49f2964383b9200935ca563edd",
                    "creationDate": "2016-02-21T13:07:08.070723",
                    "lastModification": "2016-08-05T13:19:22.4883771Z",
                    "clientId": "82e17a5125194d39b94adac80c13788d",
                    "address": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "box": null,
                        "city": "SWINDON",
                        "country": "GB",
                        "number": null,
                        "zipCode": "SN3 4TZ",
                        "street": "HIGHWORTH ROAD, SOUTH MARSTON",
                        "streetNumBox": null,
                        "region": null,
                        "type": null
                    },
                    "contactPerson": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "email": null,
                        "fax": null,
                        "name": null,
                        "tel": null
                    },
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "warningCount": null,
                    "types": [
                        "IMP",
                        "CSE",
                        "CSR",
                        "DEC"
                    ],
                    "code": "GB422443385000",
                    "name": "HONDA OF THE UK MANUFACTURING LTD.",
                    "statusCode": "2",
                    "authId": ""
                },
                "consignorId": "a3b85f49f2964383b9200935ca563edd",
                "currencyExchange": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "currency": "GBP",
                    "rate": null
                },
                "customsValuation": {
                    "chargeDeduction": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "other": null,
                        "type": null
                    },
                    "currencyExchange": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "currency": "GBP",
                        "rate": null
                    },
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "charges": null,
                    "partyRel": null,
                    "topCode": null,
                    "valuationMethod": null
                },
                "destination": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "box": null,
                    "city": null,
                    "country": null,
                    "number": null,
                    "zipCode": null,
                    "street": null,
                    "streetNumBox": null,
                    "region": null,
                    "type": null
                },
                "domesticDutyTaxParty": null,
                "domesticDutyTaxPartyId": null,
                "entryOffice": null,
                "entryOfficeId": null,
                "exitOffice": null,
                "exitOfficeId": null,
                "exporter": null,
                "exporterId": null,
                "governmentAgencyGoodsItems": [
                    {
                        "id": "aea275bdee324649b7916dd77523c32a",
                        "creationDate": "2016-09-16T10:50:30.4885775Z",
                        "lastModification": "2016-09-16T10:50:33.8316446Z",
                        "clientId": "82e17a5125194d39b94adac80c13788d",
                        "additionalDocuments": [
                            {
                                "validationOffice": {
                                    "warnings": {
                                        "blocking": [],
                                        "nonBlocking": []
                                    },
                                    "producedDocumentValidationOffice": null
                                },
                                "writeOff": {
                                    "warnings": {
                                        "blocking": [],
                                        "nonBlocking": []
                                    },
                                    "quantity": null,
                                    "unit": null,
                                    "amount": null
                                },
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "amount": null,
                                "archiveLocationIndicator": null,
                                "category": null,
                                "archiveRelatedLocationContent": null,
                                "archiveSupport": null,
                                "issueDate": "0001-01-01T00:00:00",
                                "effectiveDate": "0001-01-01T00:00:00",
                                "submitter": null,
                                "complementaryInformation": null,
                                "name": null,
                                "quantity": null,
                                "quantityCode": null,
                                "refNum": "IP/0910/156/16",
                                "type": "C601"
                            }
                        ],
                        "additionalInformations": [
                            {
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "code": "10200",
                                "text": "IP/S GOODS",
                                "type": null
                            }
                        ],
                        "commodity": {
                            "classifications": [
                                {
                                    "warnings": {
                                        "blocking": [],
                                        "nonBlocking": []
                                    },
                                    "code": "8703321900",
                                    "type": "TARIC"
                                }
                            ],
                            "dutyTaxFees": [],
                            "invoiceLine": {
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "itemAmount": 46707.00,
                                "unitPrice": null
                            },
                            "calculationReturns": [],
                            "storageLocation": null,
                            "storageLocationId": null,
                            "item": {
                                "id": "fa1f81d5aa574321b5d9531dd0740ec3",
                                "creationDate": "2016-05-12T13:58:42.423307Z",
                                "lastModification": "2016-06-24T10:35:15.7860077Z",
                                "clientId": "82e17a5125194d39b94adac80c13788d",
                                "taric": null,
                                "taricId": null,
                                "versions": [
                                    {
                                        "classifications": [
                                            {
                                                "warnings": {
                                                    "blocking": [],
                                                    "nonBlocking": []
                                                },
                                                "code": "8703321900",
                                                "type": "TARIC"
                                            }
                                        ],
                                        "additionalCodes": [],
                                        "warnings": {
                                            "blocking": [],
                                            "nonBlocking": []
                                        },
                                        "activeFrom": "2016-01-28T00:00:00Z",
                                        "creationDate": "0001-01-01T00:00:00",
                                        "description": "5DCR-V 2WH (D)",
                                        "description2": "Diesel",
                                        "description3": "            1597",
                                        "lastModification": null,
                                        "declareSupQty": true,
                                        "supQtyUoM": "PCE",
                                        "supQtyFactor": 1.0,
                                        "isValid": true,
                                        "declareAdditionalCode": true
                                    }
                                ],
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "warningCount": null,
                                "itemId": "RE670GGKG2H",
                                "type": "Product",
                                "uom": "PCE"
                            },
                            "itemId": "fa1f81d5aa574321b5d9531dd0740ec3",
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "description": null,
                            "itemDescription": null,
                            "seqNum": 1,
                            "value": null,
                            "taric": null,
                            "containsBonded": false
                        },
                        "goodsLocation": {
                            "address": {
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "box": null,
                                "city": null,
                                "country": null,
                                "number": null,
                                "zipCode": null,
                                "street": null,
                                "streetNumBox": null,
                                "region": null,
                                "type": null
                            },
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "type": null,
                            "name": null,
                            "identification": null
                        },
                        "destination": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "box": null,
                            "city": null,
                            "country": null,
                            "number": null,
                            "zipCode": null,
                            "street": null,
                            "streetNumBox": null,
                            "region": null,
                            "type": null
                        },
                        "goodsMeasure": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "calcCode": null,
                            "calcUnits": null,
                            "gmass": null,
                            "nmass": 4764.000,
                            "qty": 3.0,
                            "uoM": null,
                            "supQty": 3.00,
                            "supQtyUoM": "PCE"
                        },
                        "governmentProcedure": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "proc": "31",
                            "declProcType": "D",
                            "prevProc": "51",
                            "procEU": "000",
                            "procNat1": null,
                            "procNat2": null
                        },
                        "materials": [],
                        "origin": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "country": "GB",
                            "region": null,
                            "type": null
                        },
                        "ucr": {
                            "warnings": {
                                "blocking": [],
                                "nonBlocking": []
                            },
                            "traderReference": null,
                            "version": null,
                            "sequenceNumber": null
                        },
                        "packagings": [
                            {
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "quantity": 3,
                                "type": "NE",
                                "shippingMarks": "5DCR-V 2WH (D)"
                            }
                        ],
                        "previousDocuments": [
                            {
                                "warnings": {
                                    "blocking": [],
                                    "nonBlocking": []
                                },
                                "art": null,
                                "billOfLoading": null,
                                "category": "Z",
                                "date": "0001-01-01T00:00:00Z",
                                "item": null,
                                "lineNumber": null,
                                "loc": null,
                                "name": null,
                                "number": "2212301",
                                "type": "ZZZ"
                            }
                        ],
                        "supervisingOffice": null,
                        "supervisingOfficeId": null,
                        "valuationAdjustments": [],
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "warningCount": null,
                        "transactionNature": null,
                        "addDeclType2": null,
                        "chassisNr": null,
                        "containerIdentification": null,
                        "customsValue": null,
                        "seqNum": 1,
                        "statValue": 46707.00,
                        "extra": {
                            "vins": "VIN-Local8WFHW6NO9;VIN-Local8WFHW6NO9;VIN-Local8WFHW6NO9"
                        },
                        "supervisingOfficeRole": null,
                        "exportCountry": null
                    }
                ],
                "governmentAgencyGoodsItemIds": [
                    "aea275bdee324649b7916dd77523c32a"
                ],
                "intracom": null,
                "intracomId": null,
                "invoice": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "date": "0001-01-01T00:00:00Z",
                    "number": null,
                    "seqNum": null,
                    "type": null
                },
                "notifyParty": null,
                "notifyPartyId": null,
                "payer": null,
                "payerId": null,
                "seller": null,
                "sellerId": null,
                "supplier": null,
                "supplierId": null,
                "surety": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "code": null,
                    "date": "0001-01-01T00:00:00Z"
                },
                "tradeTerms": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "countryRelCode": null,
                    "incoTerms": null,
                    "place": null,
                    "placeCode": null,
                    "termsCode": "CIF"
                },
                "ucr": {
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "traderReference": "6GB422443385000-PNLOCAL7TXLY2PH",
                    "version": null,
                    "sequenceNumber": 1
                },
                "vatCharges": {
                    "currencyExchange": {
                        "warnings": {
                            "blocking": [],
                            "nonBlocking": []
                        },
                        "currency": "GBP",
                        "rate": null
                    },
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "charges": null
                },
                "warehouse": {
                    "warehouseDepositor": null,
                    "warehouseDepositorId": null,
                    "warnings": {
                        "blocking": [],
                        "nonBlocking": []
                    },
                    "type": null,
                    "externalReference": null,
                    "warehouseDepositorRole": null
                },
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "warningCount": null,
                "countryOfExp": null,
                "seqNum": null,
                "trxNatCode": null,
                "trxNatCode1": null,
                "trxNatCode2": null,
                "undg": null,
                "extra": {},
                "buyerRole": null,
                "consigneeRole": "000",
                "consignorRole": null,
                "notifyPartyRole": null,
                "intracomRole": null,
                "domesticDutyTaxPartyRole": null,
                "exporterRole": null,
                "payerRole": null,
                "sellerRole": null,
                "supplierRole": null,
                "entryOfficeRole": null,
                "exitOfficeRole": null,
                "exportCountry": null
            }
        ],
        "goodsShipmentIds": [
            "2a6d5be8b4fa4a8abc1671b94d058ed5"
        ],
        "governmentProcedure": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "proc": null,
            "declProcType": null,
            "prevProc": null,
            "procEU": null,
            "procNat1": null,
            "procNat2": null
        },
        "importer": null,
        "importerId": null,
        "loadingLocation": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "place": null,
            "placeCode": null,
            "country": null
        },
        "obligationGuarantee": {
            "declarationOffice": null,
            "declarationOfficeId": null,
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "securityDetails": null,
            "declarationOfficeRole": null,
            "reference": null
        },
        "packaging": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "quantity": 31,
            "type": null,
            "shippingMarks": null
        },
        "previousDocument": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "art": null,
            "billOfLoading": null,
            "category": null,
            "date": "0001-01-01T00:00:00Z",
            "item": null,
            "lineNumber": null,
            "loc": null,
            "name": null,
            "number": null,
            "type": null
        },
        "submitter": {
            "address": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "box": null,
                "city": null,
                "country": null,
                "number": null,
                "zipCode": null,
                "street": null,
                "streetNumBox": null,
                "region": null,
                "type": null
            },
            "communication": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "number": null
            },
            "contactPerson": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "email": null,
                "fax": null,
                "name": null,
                "tel": null
            },
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "code": null,
            "name": null,
            "role": null
        },
        "ucr": {
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "traderReference": null,
            "version": null,
            "sequenceNumber": null
        },
        "vatCharges": {
            "currencyExchange": {
                "warnings": {
                    "blocking": [],
                    "nonBlocking": []
                },
                "currency": "GBP",
                "rate": null
            },
            "warnings": {
                "blocking": [],
                "nonBlocking": []
            },
            "charges": null
        },
        "businessPartners": [],
        "warnings": {
            "blocking": [],
            "nonBlocking": []
        },
        "warningCount": null,
        "accDateCode": "0001-01-01T00:00:00Z",
        "validityDuration": null,
        "addDeclType1": "A",
        "addDeclType2": null,
        "comRefNum": "PNLocal7TXLY2PH",
        "declType": null,
        "docRefNum": null,
        "functionRefNum": null,
        "importExportTransit": null,
        "invoiceCurrency": null,
        "issueDate": "2016-09-16T10:50:33.7055557Z",
        "issuePlaceCode": null,
        "loadListNum": null,
        "msgFunctionCode": "9",
        "nameCode": null,
        "sendDateTime": "0001-01-01T00:00:00Z",
        "totalInvoiceAmount": 46707.00,
        "totNumItems": null,
        "trxNatCode1": null,
        "trxNatCode2": null,
        "version": null,
        "extra": {
            "messageId": "PNLocal7TXLY2PH"
        },
        "agentRole": null,
        "declarantRole": "1",
        "importerRole": null,
        "declarationOfficeRole": null,
        "emergencyCode": null,
        "emergencyCodeBool": false
    };

    var doc = createPdfCommand.execute(data);

    doc.stdout.pipe(res);

    return res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        // 'Content-Disposition': 'inline; filename="test.pdf"',
    });

});

app.get('/', function(req, res) {
    res.send('Surf to /pdfdownload to test')
});

//start the server
app.listen(port, function () {
    console.log('Express server started on port 8080');
});
