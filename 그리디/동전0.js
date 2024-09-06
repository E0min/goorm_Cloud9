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
let count = 0;
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    let [N,K] = input[0].split(" ").map(Number);
    let coinsValue = input.slice(1).map(Number);

    for(let i = N-1 ; i >=0 ; i--){
        if(coinsValue[i]<= K){
            count = count + Math.floor(K/coinsValue[i]);
            K = K%coinsValue[i];
        }
    }
    
    console.log(count); // 최솟값 출력
    process.exit();
});