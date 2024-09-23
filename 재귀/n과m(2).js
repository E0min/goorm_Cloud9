//
//백준 실버2

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

    const [N, M] = input[0].split(" ").map(Number);

    let n = [];
    let result = [];

    for (let i = 0; i < N; i++) {
        n.push(i + 1);
    }

    function nOfM(n, m) { 
        if (m == 1) {
            for (let i = 0; i < n.length; i++) {
                result.push(n[i]);
                console.log(`${result.join(' ')}`); // 출력: >> 1 2 3                
                result.pop();
            }
            return;
        } else {
            for (let i = 0; i < n.length; i++) {
                result.push(n[i]);
                nOfM(n.slice(i+1), m - 1);
                result.pop();
            }
        }

    }

    nOfM(n, M);
    rl.close();

});
