const spellchecker = require('spellchecker');

module.exports = function(str, res) {
  let words = str.match(/[\w]+/g)

  words.map((val) => {
     if (spellchecker.isMisspelled(val)) {
        res.write(`Wrong word: ${val}\n`)
        res.write(`Suggestions: ${spellchecker.getCorrectionsForMisspelling(val)}\n\n`);
     }
  });

  res.end(':) I hope it helped\n')
}