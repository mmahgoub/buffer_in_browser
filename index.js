

function getTLVForValue(tagNum, tagValue) {
  var tagBuf = Buffer.from([tagNum], 'utf8');
  var tageValueLenBuf = Buffer.from([tagValue.length], 'utf8')
  var tageValueBuf = Buffer.from(tagValue, 'utf8');
  var bufsArray = [tagBuf, tageValueLenBuf, tageValueBuf]
  return Buffer.concat(bufsArray);
}

//1.Seller Name
var sellerNameBuf = getTLVForValue("1", "Salah Hospital");

//2.VAT Registration 
var vatRegestrationNameBuf = getTLVForValue("2", "234242342342342343");

//3.Time stamp
var timeStampBuf = getTLVForValue("3", "2022-04-25T15:30:00Z");

//4.Invoice total
var taxTotalNameBuf = getTLVForValue("4", "2100100.99");

//5.VAT total
var vatTotalBuf = getTLVForValue("5", "315015.15")

var tagsBufsArray = [sellerNameBuf, vatRegestrationNameBuf, timeStampBuf, taxTotalNameBuf, vatTotalBuf];
var qrCodeBuf = Buffer.concat(tagsBufsArray);
var qrCodeB64 = qrCodeBuf.toString('base64');
//let img = document.createElement('img');
//img.src = "data:image/png;base64, "+qrCodeB64;
//let qr = document.getElementById('qr')
//qr.appendChild(img);
let qr = document.getElementById('qrtext')
qr.innerText = qrCodeB64;
new QRCode(document.getElementById("qr"), qrCodeB64);