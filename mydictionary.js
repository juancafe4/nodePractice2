var VocabFetcher = require("vocab-fetcher")
var vocabFetcher = new VocabFetcher()


module.exports = function(str, res) {
  vocabFetcher.getWord(str)
  .then(function(wordObj){
    res.write(`Description: ${wordObj.longDescription}\n\n`)
    res.end()
  })
  .catch((err) => {
res.write('word not found :(')
res.end()
    });
}