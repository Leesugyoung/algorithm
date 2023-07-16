const input = require('fs').readFileSync('/dev/stdin').toString()

let num = Number(input);

result = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
  // for (let j = num - 1; j > i; j--) {
    result += ' ';
  }

  for (let k = 0; k <=i; k++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);