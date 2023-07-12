const input = require('fs').readFileSync('/dev/stdin').toString()

let count = Number(input) / 4;
let printLong = '';

for (let i = 1; i <= count; i++) {
       printLong = printLong + "long ";
}

console.log(printLong + 'int');