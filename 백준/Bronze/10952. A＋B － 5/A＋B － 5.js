const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let index = 0;

while (true) {
  const [a, b] = input[index++].split(' ').map(Number);

  if (a === 0 && b === 0) {
    break;
  }

  console.log(a + b);
}