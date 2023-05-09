const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);

const result1 = (num1 + num2) % num3;
    const result2 = ((num1 % num3) + (num2 % num3)) % num3;
    const result3 = (num1 * num2) % num3;
    const result4 = ((num1 % num3) * (num2 % num3)) % num3;

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);