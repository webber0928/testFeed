var FeedMe = require('feedme')
  , parser = new FeedMe()
  , fs = require('fs')
 
parser.on('title', function(title) {
  console.log('title of feed is', title);
});
 
parser.on('item', function(item) {
  //console.log(item);
});
 
parser.write('bbb.xml');

// sax-js and clarinet allow streaming 
// which means faster parsing for larger feeds! 
fs.createReadStream('aaa.xml').pipe(parser);
