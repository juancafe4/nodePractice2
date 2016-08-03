const http = require('http');
const operations = require('./operations.js')
const port = 8000
let server = http.createServer((req, res) => {

  let url = decodeURI(req.url).match(/[^/]+/g)
  console.log(url)
  if(url[0] === 'add' || url[0] === 'subs'
    || url[0] === "mult" || url[0] === 'div'
    || url[0] === 'pow') {
    operations(url, res)
  }
  
  else {
    res.statusCode = 404
    res.end("Command not found! 404\n");
  }
});

server.listen(port, function(err) {
  console.log(err || `Server listenning on ${port}`);
})