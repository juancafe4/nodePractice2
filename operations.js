module.exports = function operation(arr, res) {
  let result = 0;
  let oper = arr[0]
  arr = arr[1].split(' ')
  if (arr[0] && arr[1]) {
    switch(oper) {
      case 'add':
        result = parseInt(arr[0]) + parseInt(arr[2])
        break;
      case 'subs':
        result = parseInt(arr[0]) - parseInt(arr[2])
        break;
        case 'mult':
        result = parseInt(arr[0]) * parseInt(arr[2])
        break;
        case 'div':
        result = parseInt(arr[0]) / parseInt(arr[2])
        break;
        case 'pow':
        result = Math.pow(parseInt(arr[0]), parseInt(arr[2]))
        break;

    }

    res.write(`The answer is ${result}!\n`)
  } else {
    if(arr[0])
      res.write(arr[0] + '\n');
    else
      res.write(arr[2] + '\n');
  }

  res.end(':)')
}