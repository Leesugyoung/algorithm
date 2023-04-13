const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);

console.log(a-543);