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

    const N = parseInt(input[0]);
    let starArr = Array.from({ length: N }, () => Array(N).fill(' ')); //N*N 배열 생성
    function star(x, y, n) { 
        if (n == 1) {
            starArr[x][y] = "*";
            return;
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i == 1 && j == 1) { continue; }
                    star(x + i * n/3, y + j * n/3, n / 3);
                }
            }
        }
    }
    star(0,0,N);
    console.log(starArr.map(a=>a.join("")).join('\n'));


    rl.close();

});