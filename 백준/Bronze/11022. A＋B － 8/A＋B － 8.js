let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    let a = Number(numbers[0])
    let b = Number(numbers[1])
    
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);
}