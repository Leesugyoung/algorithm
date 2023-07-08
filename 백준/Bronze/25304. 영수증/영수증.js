const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let total = Number(input[0]);
let cnt = Number(input[1]);
let check = 0;

for(let i=2; i<=cnt+1; ++i){
    let newArr = input[i].split(" ").map(item=>Number(item));
    check += newArr[0] * newArr[1];
}

console.log(total === check ? "Yes" : "No");