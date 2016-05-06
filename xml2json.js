var parseString = require('xml2js').parseString;
var fs = require("fs");
var xml = fs.readFileSync(__dirname + '/test/assets/rss2.xml', 'utf-8');

parseString(xml, function (err, result) {
    console.dir(result);
});
