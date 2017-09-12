

var fs = require('fs');
var http = require('http');
var url = require('url');
var Web3 = require('web3'); // BlockChain Modulo
var querystring = require('querystring');


var mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :    'audio/mpeg3',
   'mp4'  : 'video/mp4'
};



http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write (data);
    res.end();
  });

}).listen(8080);
