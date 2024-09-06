//https://www.acmicpc.net/problem/11047
//백준
const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    let expression = input[0].split(/([+-])/); //기억!
    let currentSign ="+";
    let answer=0;
    for(let i = 0;i<expression.length;i++){
        if(!isNaN(expression[i]) && currentSign=="+"){ //숫자일 경우
            answer = answer + Number(expression[i]);
        }else if (!isNaN(expression[i]) && currentSign=="-"){ //숫자일 경우
            answer = answer - Number(expression[i]);
        }else if(expression[i] == "-" && currentSign!="-"){
            currentSign = "-";
        }

    }
    console.log(answer);
    process.exit();
});