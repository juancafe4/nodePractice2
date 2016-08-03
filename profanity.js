const Filter = require('bad-words')

module.exports = function(str ,res) {
 let words = str.match(/[\w]+/g)
 let filter = new Filter()
 let count = 0;
 words.map(val => {
  let isBadWord = val.replace(/[\w]/g, '*')
  if(filter.clean(val) === isBadWord) count++
 })
  
 res.write(`Number of bad words: ${count}\n`)
 res.end(`Don't say bad words :)\n`);
}