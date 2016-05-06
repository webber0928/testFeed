var json2xml = require('json2xml');
var fs = require("fs");
var xml = fs.readFileSync(__dirname + '/test/assets/jsonfeed.json', 'utf-8');
console.log(xml)
// var a = JSON.parser(xml);
console.log(json2xml(xml));
