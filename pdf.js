const fs = require('fs');
const PDFDocument = require("pdfkit");
var converter = require('number-to-words');

const { pserialNumber, pproductName, pplanPrice, pquantity, pcgstPercent, psgstPercent, pRow,
  datastoriingInNumber, SdatastoriingInNumber


} = require('./data')

console.log("index data SGST", SdatastoriingInNumber);
console.log("index  CGST data", datastoriingInNumber);

var takingPointToconvertNumber = pcgstPercent[0]

var takingPointToconvertNumberLen = takingPointToconvertNumber.length;

console.log("takin", takingPointToconvertNumber);

console.log("takingPointToconvertNumberLen Lenth", takingPointToconvertNumberLen);

const pserialNumberLen = pserialNumber.length;
const pproductNameLen = pproductName.length
const pplanPriceLen = pplanPrice.length;
const pquantityLen = pquantity.length;
const pcgstPercentLen = pcgstPercent.length;
const psgstPercentLen = psgstPercent.length;
console.log(pserialNumberLen)
console.log(pproductNameLen)
console.log(pplanPriceLen)
console.log(pquantityLen)
console.log(pcgstPercentLen)
console.log(psgstPercentLen)
console.log(pserialNumber, pproductName, pplanPrice, pquantity, pcgstPercent, psgstPercent)

///              CGST   
const cgstRupee = pcgstPercent;
const cgstRupeeLen = cgstRupee.length;
var cgstRupeeAMount = [];
var cgstRupeeAM = [];



for (i = 0; i < cgstRupeeLen; i++) {
  cgstRupeeAMount += cgstRupee[i].substring(0, 2);
}
var finalAmt = [];

for (let i = 0; i < cgstRupeeLen; i++) {
  finalAmt += cgstRupeeAMount[+(i)];
}

console.log(finalAmt)

console.log(cgstRupeeLen)

////////////           SGST

const sSgstRupee = psgstPercent;
const sSgstRupeeLen = sSgstRupee.length;
var sScgstRupeeAMount = [];

for (i = 0; i < sSgstRupeeLen; i++) {
  sScgstRupeeAMount += sSgstRupee[i].substring(0, 1);
}
var sSfinalAmt = [];

for (let i = 0; i < cgstRupeeLen; i++) {
  sSfinalAmt += (sScgstRupeeAMount[+(i)]);
}

console.log("final", sSfinalAmt)

//////////           Important array for total array

class cgstTotalArray {

  func() {

    var arrayUpdate = []
    var dummyup = [];
    var total = 0;
    for (let i = 0; i < pplanPriceLen; i++) {
      dummyup = (percentcalculater(finalAmt[i], pplanPrice[i])).toFixed(3);
      total = total + (+dummyup);

      arrayUpdate.push(+dummyup);

    }
    console.log("Total", total);
    console.log("Update", arrayUpdate);
    return arrayUpdate;


  }


}

// Important array for SGST

class sgstTotalArray {

  func() {

    var arraySUpdate = []
    var dummyupS = [];

    for (let i = 0; i < pplanPriceLen; i++) {
      dummyupS = (percentcalculater(sSfinalAmt[i], pplanPrice[i])).toFixed(3);


      arraySUpdate.push(+dummyupS);

    }

    console.log("Update", arraySUpdate);
    return arraySUpdate;


  }
}

var MyCGSTdata = new cgstTotalArray();

const MyCGSTdataFinalUse = MyCGSTdata.func();

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// var MySGSTdata=new sgstTotalArray();

// var MySGSTdataFinalUse=MySGSTdata.func();


function productCGSTRupee(doc, leftpadding, toppadding) {

}
// const finalRupeeConvertingSetup=[] 

// for(let i=0;i<cgstRupeeLen;i++)
// {
//   finalRupeeConvertingSetup+=cgstRupeeAMount[i].toFixed(1)
// }
console.log("Number data is", finalAmt)
// Plan price









//  CGST

var cgst = ["9%", "9%", "9%", "9%", "9%", "9%", "9%"];
var cgstLen = cgst.length

var cgstCAlculate = [9, 9, 9, 9, 9, 9, 9]

//   SGST
var sgst = ["9%", "9%", "9%", "9%", "9%", "9%", "9%"];
var sgstLen = cgst.length
var sgstCAlculate = [9, 9, 9, 9, 9, 9, 9]

// function AmountWithGST()
// {
//   var amount=pplanPrice+
// }
//   Total amt function
function percentcalculater(prcnt, ttl) {
  return (prcnt / 100) * ttl;
}

function AmountWithGST(doc, leftpadding, toppadding) {
  var amount = [];
  var dumy = []
  for (let i = 2; i < pplanPriceLen; i++) {

    amount += dumy[i]
  }

  console.log(amount, pplanPriceLen)

}

function TotalAmt(doc, leftpadding, toppadding, top) {

  var cgsttotal = [];
  var b = [];

  var sgsttotal = [];
  for (let i = 0; i < pplanPriceLen; i++) {
    cgsttotal.push(percentcalculater(datastoriingInNumber[i], pplanPrice[i]))
    sgsttotal.push(percentcalculater(SdatastoriingInNumber[i], pplanPrice[i]))
    b.push((pplanPrice[i] + cgsttotal[i]) * pquantity[i])
  }

  const p = percentcalculater(datastoriingInNumber[1], pplanPrice[1]) * 3

  console.log("trial data for percent", p, pquantity, b);

  console.log("cgst for Total", cgsttotal)

  console.log("Sgst for Total", sgsttotal)
  for (i = 0; i < pplanPriceLen; i++) {
    if (i === 0) {


      doc

        .text((b[i]).toFixed(2), leftpadding, toppadding)
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text((((pplanPrice[i] + cgsttotal[i]) * pquantity[i]).toFixed(2)), leftpadding, toppadding);

    }

  }
  var total = 0;
  for (i = 0; i < pplanPriceLen; i++) {

    total = total + ((pplanPrice[i] + cgsttotal[i]) * pquantity[i])

  }

  console.log("Grand Total", total);

  var spl = (total + "").split(".")[1];;

  console.log("spliting value is here", spl);

  doc
    .text(total.toFixed(2), leftpadding, toppadding + 20)
    .fontSize(10)
    .text("Grand Total : " + parseFloat(total), 422, top + 30)
  // .text("(In words)   :  " + converter.toWords(total)+" & point "+converter.toWords(spl), 422, top + 40)

}

////      S.No.

function SerialNumber(doc, leftpadding, toppadding) {
  for (let i = 0; i < pserialNumberLen; i++) {
    if (i === 0) {

      doc
        .text(pserialNumber[i], leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(pserialNumber[i], leftpadding, toppadding)

    }

  }

}


///           Product List
function Productdtail(doc, leftpadding, toppadding) {
  for (let i = 0; i < pproductNameLen; i++) {
    if (i === 0) {

      doc
        .text(pproductName[i], leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(pproductName[i], leftpadding, toppadding)

    }

  }

}

//////////////              Price

function ProductPriceDetail(doc, leftpadding, toppadding) {
  for (let i = 0; i < pplanPriceLen; i++) {
    if (i === 0) {

      doc
        .text(pplanPrice[i], leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(pplanPrice[i], leftpadding, toppadding)

    }

  }

}

///////////             Quantity
function productQuantity(doc, leftpadding, toppadding) {
  for (let i = 0; i < pquantityLen; i++) {
    if (i === 0) {

      doc
        .text(pquantity[i], leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(pquantity[i], leftpadding, toppadding)

    }

  }
}

///////////             CGST %
function productCGST(doc, leftpadding, toppadding) {
  for (let i = 0; i < pcgstPercentLen; i++) {
    if (i === 0) {

      doc
        .text(pcgstPercent[i], leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(pcgstPercent[i], leftpadding, toppadding)

    }

  }

}

///////////             SGST %
// // function productSGST(doc, leftpadding, toppadding) {
// //   for (let i = 0; i < psgstPercentLen; i++) {
// //     if (i === 0) {

// //       doc
// //         .text(psgstPercent[i], leftpadding, toppadding);
// //     }
// //     else {
// //       toppadding = toppadding + 20;
// //       doc
// //         .text(psgstPercent[i], leftpadding, toppadding)

// //     }

// //   }

// }
/*
 // Table CGST/*
 .text( percentcalculater(cgst[0], planPrice[0]).toFixed(2),375,395 )
 .text( percentcalculater(9, 499).toFixed(2),375,415 )
 .text( percentcalculater(9, 599).toFixed(2),375,435 )
*/
///      CGSTRUPEE

function productCGSTRupee(doc, leftpadding, toppadding) {
  for (let i = 0; i < pplanPriceLen; i++) {
    if (i === 0) {

      doc
        .text(percentcalculater(datastoriingInNumber[i], pplanPrice[i]).toFixed(2), leftpadding, toppadding);
    }
    else {
      toppadding = toppadding + 20;
      doc
        .text(percentcalculater(datastoriingInNumber[i], pplanPrice[i]).toFixed(2), leftpadding, toppadding)

    }

  }

}

// ///////  SGSTRUPEE
// function productSGSTRupee(doc, leftpadding, toppadding) {
//   for (let i = 0; i < psgstPercentLen; i++) {
//     if (i === 0) {

//       doc
//         .text(percentcalculater(SdatastoriingInNumber[i], pplanPrice[i]).toFixed(2), leftpadding, toppadding);
//     }
//     else {
//       toppadding = toppadding + 20;
//       doc
//         .text(percentcalculater(SdatastoriingInNumber[i], pplanPrice[i]).toFixed(2), leftpadding, toppadding)

//     }

//   }

// }

function ValueCollectForTotal(top) {

  for (let i = 0; i < pcgstPercentLen; i++) {
    top = top + 20
  }
  return top;
}


////////   Main Function

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ margin: 50 });
  generateHeader(doc);

  linetable(doc);
  const top = ValueCollectForTotal(375)

  console.log(top)
  // addTexInNewRow(doc);
  generateFooter(doc, top);

  ///             Table content function

  SerialNumber(doc, 58, 395 - 20);
  Productdtail(doc, 85, 395 - 20)
  ProductPriceDetail(doc, 168, 395 - 20)
  productQuantity(doc, 244, 395 - 20)
  productCGST(doc, 309, 395 - 20)
  // productSGST(doc, 340, 395)

  productCGSTRupee(doc, 405, 395 - 20)
  // productSGSTRupee(doc, 428, 395)
  TotalAmt(doc, 495, 395 - 20, top);
  AmountWithGST(doc, 500, 395)

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    .image("logo.png", 270, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(18.5)
    .text("jahdsgduycd xjdcghsjdcdITED sangam sangam sangam ", 80, 115)
    .fontSize(10)
    .text("dhcbsjcydschdscbdscydgcgdschdcb sangam sangam sangam ", 89, 132)
    .fontSize(17)
    .text("TAX INVOICE", 250, 180)

    .fontSize(10)
    .text("GSTIN : 122334V4568F1Z4", 44, 220, { align: "left" })

    .fontSize(10)
    .text("Name : sangam", 300, 220)
    .fontSize(10)
    .text("Order No. : 241", 300, 235)
    .fontSize(10)
    .text("Invoice Details : iron man", 300, 250)
    .fontSize(10)
    .text("Bank/Order Refrence No. : thor", 300, 265)
    .fontSize(10)
    .text("State UT code : 0101", 45, 235, { align: "left" })
    .fontSize(10)
    .text("Order Date : 21-11-2055", 45, 250, { align: "left" })
    .fontSize(10)
    .text("Customer Id : 999", 45, 265, { align: "left" })
    .moveDown();
}


//////                         Row adding




function linetable(doc) {
  doc.lineCap('butt')
    .moveTo(80, 130 + 220)
    .lineTo(80, 380 + 190 - 200)
    .moveTo(155, 130 + 220)
    .lineTo(155, 380 + 190 - 200)

    .moveTo(225, 130 + 220)
    .lineTo(225, 380 + 190 - 200)
    .moveTo(270, 130 + 220)
    .lineTo(270, 380 + 190 - 200)

    //little
    // .moveTo(320, 130 + 240)
    // .lineTo(320, 380 + 90)
    .moveTo(370, 130 + 220)
    .lineTo(370, 380 + 190 - 200)
    // .moveTo(420, 130 + 240)
    // .lineTo(420, 380 + 90)
    .moveTo(470, 130 + 220)
    .lineTo(470, 380 + 190 - 200)
    .stroke()

  var upperheight = 350 - 120
  var lowerheight = 470 - 100
  var childUpperheight = 370
  row(doc, 330);
  row(doc, 350);
  // row(doc, 370);
  // row(doc, 390);
  // row(doc, 410);
  // row(doc, 430);
  // row(doc, 450);

  addrow(doc, upperheight, lowerheight, childUpperheight, pRow);

  textInRowparant(doc, 'Plan Details', 335);
  textInRowFirst(doc, 'S.No.', 355);
  textInRowSecond(doc, 'Product name', 355);
  textInRowThird(doc, 'Plan Price', 355);
  textInRowForth(doc, 'Qty', 355);
  textInRowFifth(doc, 'Taxes (IGST)', 355);
  textInRowSix(doc, 'Tax Amt.', 355);
  textInRowSeventh(doc, 'Total Amt.', 355);

  // CHILD

  //  textInRowFirstChild(doc, 'CGST(%)', 375);
  // textInRowSecondChild(doc, 'SGST(%)', 375);
  // textInRowThirdChild(doc, `CGST`, 375);
  // textInRowFourthChild(doc, 'SGST', 375);

}

//       Parant row
function textInRowparant(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 270;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

function textInRowFirst(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 46;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

/////////////                 second row

function textInRowSecond(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 80;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

/////     Third row

function textInRowThird(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 163;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}


///////////////  Fourth

function textInRowForth(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 234;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

//   Fifth


function textInRowFifth(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 287;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}
/// Six

function textInRowSix(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 396;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

/////////// Child

function textInRowFirstChild(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 295;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

///   SECond CHILD

// function textInRowSecondChild(doc, text, heigth) {
//   doc.y = heigth;
//   doc.x = 320;
//   doc.fillColor('black')
//   doc.text(text, {
//     paragraphGap: 5,
//     indent: 5,
//     align: 'justify',
//     columns: 1,
//   });
//   return doc
// }

/////      THIRD CHILD

function textInRowThirdChild(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 400;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}


/////      FOURTH CHILD


// function textInRowFourthChild(doc, text, heigth) {
//   doc.y = heigth;
//   doc.x = 420;
//   doc.fillColor('black')
//   doc.text(text, {
//     paragraphGap: 5,
//     indent: 5,
//     align: 'justify',
//     columns: 1,
//   });
//   return doc
// }

//////////////////   seventh


function textInRowSeventh(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 490;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: 'justify',
    columns: 1,
  });
  return doc
}

function row(doc, heigth) {



  doc.lineJoin('miter')
    .rect(45, heigth, 520, 20)
    .stroke()
  return doc
}

function addrow(doc, upperheight, lowerheight, childUpperheight, heigth) {
  var row = 350
  upperheight = upperheight + (20 * heigth);
  lowerheight = lowerheight + (20 * heigth);
  childUpperheight = childUpperheight + (20 * heigth);


  for (let i = 0; i < heigth; i++) {
    console.log("hello from line function 1")
    row = row + 20;
    doc.lineJoin('butt')
      .rect(45, row, 520, 20)

     doc.lineCap('butt')
      .moveTo(80, upperheight)
      .lineTo(80, lowerheight)
      .moveTo(155, upperheight)
      .lineTo(155, lowerheight)

      .moveTo(225, upperheight)
      .lineTo(225, lowerheight)
      .moveTo(270, upperheight)
      .lineTo(270, lowerheight)

      //little
      // .moveTo(320, upperheight)
      // .lineTo(320, lowerheight)
      .moveTo(370, upperheight)
      .lineTo(370, lowerheight)
      // .moveTo(420, upperheight)
      // .lineTo(420, lowerheight)
      .moveTo(470, upperheight)
      .lineTo(470, lowerheight)
      .stroke()
      console.log("hello from line function 2")

  }

  return doc

}



/////////////  Footer


function generateFooter(doc, top) {
  doc
    .image("logo.png", 422, top + 70, { width: 50 })


    // // Table QTy
    // .text(productQty[0],244,395 )
    // .text(productQty[1],244,415 )
    // .text(productQty[2],244,435 )
    /*
          // Table CGST %
          .text( "9%",288,395 )
          .text( "9%",288,415 )
          .text( "9%",288,435 )
         
          // Table SGST %
          .text( "9%",340,395 )
          .text( "9%",340,415 )
          .text( "9%",340,435 )
    */
    /*
          // Table CGST
          .text( percentcalculater(9, 399).toFixed(2),375,395 )
          .text( percentcalculater(9, 499).toFixed(2),375,415 )
          .text( percentcalculater(9, 599).toFixed(2),375,435 )
    */
    /*
            // Table SGST
            .text(percentcalculater(9, 399).toFixed(2),428,395 )
            .text(percentcalculater(9, 399).toFixed(2),428,415 )
            .text(percentcalculater(9, 399).toFixed(2),428,435 )
    
            */
    // Table Total amount
    /*
    .text(arr[0],500,395 )
    .text(arr[1],500,415 )ssssssss
    .text(arr[2],500,435 )
        */


    .text(" Total", 46, top)
    .text("Authorized Signatory", 422, top + 140)
    .text(
      "Payment is due within 15 days. Thank you for your business.",
      50,
      720,
      { align: "center", width: 500 }
    );
}



module.exports = {
  createInvoice
};

  //////////////////////////////