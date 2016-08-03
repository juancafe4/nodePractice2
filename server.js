const http = require('http');
const md5 = require("MD5");
const moment = require("moment")
const sp = require('./sp')
const fil = require('./profanity')
const sentenceAnalizer = require('./sentenceAnalizer')
const operations = require('./operations.js')
const dict = require('./mydictionary.js')
const port = 8000
let server = http.createServer((req, res) => {

  let url = decodeURI(req.url).match(/[^/]+/g)
  console.log('url ', url)
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
    res.write(`It has ${ moment(url[1]).fromNow()}\n`);
    res.end(':)')
  } else if(url[0] === 'spellchecker') {
    sp(url[1], res)
  } else if(url[0] === 'profanity') {
    fil(url[1], res)
  } else if(url[0] === 'dictionary') {
    dict(url[1], res)
  } else {
    res.statusCode = 404
    res.end("Command not found! 404\n");
  }
});


server.listen(port, function(err) {
  console.log(err || `Server listenning on ${port} \n\n`);
  console.log('**************** Help commands: ****************\n')
  console.log('addition: add/num1 + num2\n');
  console.log('subtraction: sub/num1 - num2\n');
  console.log('multiplication: mult/num1 * num2\n');
  console.log('division: div/num1 / num2\n')
  console.log('grabbing your gravatar profile picture: gravatar/emaik_address\n')
  console.log('amalize your sentence word count, character count, and average of word length: analizer/sentence\n')
  console.log('how many years from your birthday: birthdate/MM-DD-YYYY\n')
  console.log('use the spellchecker: spellchecker/sentence\n');
  console.log('count how many bad words: profanity/sentence\n');
  console.log('meaning of a word: dictionary/word\n')
  console.log('*********************************************')
})