const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const sourceDir = process.argv[2];

function readFileToJson(filename) {
  var wb = xlsx.readFile(filename);
  var firstTabName = wb.SheetNames[0];
  var ws = wb.Sheets[firstTabName];
  var data = xlsx.utils.sheet_to_json(ws);
  return data;
}

console.log(`Dir is ${sourceDir}`);

var targetDir = path.join(sourceDir);
var files = fs.readdirSync(targetDir);

console.log(files);

console.log("Listing paths");

var combinedData = [];

files.forEach(function (file) {
  var fileExt = path.parse(file).ext;
  if (fileExt === ".xlsx" && file[0] !== "~") {
    var data = readFileToJson(path.join(sourceDir, file));
    combinedData = combinedData.concat(data);
    // console.log(data);
  }
});

console.log(combinedData.length);

const uniqueRows = [
  ...new Set(combinedData.map((obj) => JSON.stringify(obj))),
].map((str) => JSON.parse(str));

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(uniqueRows);

var targetFile = path.join(sourceDir, "sammanslagen.xlsx");

xlsx.utils.book_append_sheet(newWB, newWS, "Sammanslaget");
xlsx.writeFile(newWB, targetFile);
