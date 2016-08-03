module.exports = function(str, res) {
  let words = str.match(/[\w]+/g)
  let chars = str.match(/[\w]+/g).join('')
  res.write(`Numbers of words: ${words.length}\n`)
  res.write(`Numbers of characters: ${chars.length}\n`)
  let avg = 0;
  words.map((val) => avg += val.length);
  res.write(`Average word length ${(avg / words.length).toFixed(2)}\n`)
  res.end(":)")
}