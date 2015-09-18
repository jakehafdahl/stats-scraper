
var name = $('h1.float_left').text();
var heightRegex = new RegExp(/Height:\s(\d-\d?)/);
var weightRegex = new RegExp(/Weight:\s(\d{3})/);
var heightString = $('strong:contains("Height")').parent().text().match(heightRegex)[1];
var weightString = $('strong:contains("Weight")').parent().text().match(weightRegex)[1];
var heightPieces = heightString.split('-');
console.log(heightPieces[0]);
console.log(heightPieces[1]);
var height = parseInt(heightPieces[0]) + (parseInt(heightPieces[1]) / 12);
console.log(weightString);
var weight = parseInt(weightString);
var position = "RB";