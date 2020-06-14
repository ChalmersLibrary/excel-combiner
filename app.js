#! /usr/bin/env node
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const sourceDir = process.argv[2];
if (!sourceDir) {
  console.log("You need to specify your source directory.");
  process.exit(1);
}
console.log(`SourceDir is ${sourceDir}`);

function readFileToJson(filename) {
  var wb = xlsx.readFile(filename);
  var firstTabName = wb.SheetNames[0];
  var ws = wb.Sheets[firstTabName];
  var data = xlsx.utils.sheet_to_json(ws);
  return data;
}

var targetDir = path.join(sourceDir);
var files = fs.readdirSync(targetDir);

var combinedData = [];

files.forEach(function (file) {
  var fileExt = path.parse(file).ext;
  if (fileExt === ".xlsx" && file[0] !== "~") {
    console.log(`Reading ${file}`);
    var data = readFileToJson(path.join(sourceDir, file));
    combinedData = combinedData.concat(data);
  }
});

const uniqueRows = [
  ...new Set(combinedData.map((obj) => JSON.stringify(obj))),
].map((str) => JSON.parse(str));

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(uniqueRows);

var targetFile = path.join(sourceDir, "combined.xlsx");

xlsx.utils.book_append_sheet(newWB, newWS, "Combined");
console.log(`Writing ${targetFile}`);
xlsx.writeFile(newWB, targetFile);
console.log("Done.");
