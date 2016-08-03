const http = require('http');
const md5 = require("MD5");
const sentenceAnalizer = require('./sentenceAnalizer')
const operations = require('./operations.js')
const port = 8000
let server = http.createServer((req, res) => {

  let url = decodeURI(req.url).match(/[^/]+/g)
  if(url[0] === 'add' || url[0] === 'subs'
    || url[0] === "mult" || url[0] === 'div'
    || url[0] === 'pow') {
    operations(url, res)
  }else if (url[0] === 'gravatar') {
    let hash = md5(url[1])
    let gravatarUrl = `http://www.gravatar.com/avatar/${hash}`
    res.write(`<div><img src=${gravatarUrl}></div>\n`)
    res.end("Cool gravatar :)\n")
  }else if (url[0] === 'analizer') {
    sentenceAnalizer(url[1], res)
  } else if(url[0] === 'birthdate') {

  } else {
    res.statusCode = 404
    res.end("Command not found! 404\n");
  }
});


server.listen(port, function(err) {
  console.log(err || `Server listenning on ${port}`);
})